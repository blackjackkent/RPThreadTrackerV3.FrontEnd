import axios from 'axios';
import { call } from 'redux-saga/effects';
import untrackThreadSaga from '../untrackThreadSaga';
import * as actions from '../../../actions';
import { SagaTestWrapper } from '~/testhelpers/helpers.unit';

global.API_BASE_URL = 'http://test-site/';
describe('saga behavior', () => {
	describe('untrackIndividualThread', () => {
		it('should dispatch success message on successful DELETE', () => {
			const thread = {
				threadId: 1
			};
			const saga = new SagaTestWrapper(untrackThreadSaga);
			saga.setup(call(axios.delete, 'http://test-site/api/thread/1'), thread);
			saga.expectPut({
				type: actions.UNTRACK_THREAD_SUCCESS
			});
			saga.expectPut({
				type: actions.FETCH_ACTIVE_THREADS
			});
			saga.expectPut({
				type: actions.FETCH_ARCHIVED_THREADS
			});
			return saga.execute({
				type: actions.UNTRACK_THREAD,
				data: thread
			});
		});
		it('should dispatch failure action on failed DELETE', () => {
			const thread = {
				threadId: 1
			};
			const saga = new SagaTestWrapper(untrackThreadSaga);
			saga.setupError(call(axios.delete, 'http://test-site/api/thread/1'), 'Test error');
			saga.expectPut({
				type: actions.UNTRACK_THREAD_FAILURE
			});
			return saga.execute({
				type: actions.UNTRACK_THREAD,
				data: thread
			});
		});
	});
	describe('bulk update', () => {
		it('should dispatch events for all deleted threads', () => {
			const threads = [
				{
					threadId: 1,
					userTitle: 'Test thread'
				},
				{
					threadId: 2,
					userTitle: 'Test thread 2'
				}
			];
			const saga = new SagaTestWrapper(untrackThreadSaga);
			saga.setupAll([
				{
					matcher: call(axios.delete, 'http://test-site/api/thread/1'),
					result: threads[0]
				},
				{
					matcher: call(axios.delete, 'http://test-site/api/thread/2'),
					result: threads[1]
				}
			]);
			saga.expectPut({
				type: actions.UNTRACK_THREAD_SUCCESS
			});
			saga.expectPut({
				type: actions.UNTRACK_THREAD_SUCCESS
			});
			saga.expectPut({
				type: actions.BULK_UNTRACK_THREADS_SUCCESS
			});
			saga.expectPut({
				type: actions.FETCH_ACTIVE_THREADS
			});
			saga.expectPut({
				type: actions.FETCH_ARCHIVED_THREADS
			});
			return saga.execute({
				type: actions.BULK_UNTRACK_THREADS,
				data: threads
			});
		});
		it('should dispatch general failure event if unexpected error occurs', () => {
			const saga = new SagaTestWrapper(untrackThreadSaga);
			saga.expectPut({
				type: actions.BULK_UNTRACK_THREADS_FAILURE
			});
			return saga.execute({
				type: actions.BULK_UNTRACK_THREADS,
				data: null
			});
		});
	});
});
