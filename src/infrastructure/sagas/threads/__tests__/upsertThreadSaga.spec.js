import axios from 'axios';
import { call } from 'redux-saga/effects';
import upsertThreadSaga from '../upsertThreadSaga';
import * as actions from '../../../actions';
import { SagaTestWrapper } from '~/testhelpers/helpers.unit';

global.API_BASE_URL = 'http://test-site/';
describe('saga behavior', () => {
	describe('update', () => {
		it('should update thread when thread has ID', () => {
			const thread = {
				threadId: 1
			};
			const saga = new SagaTestWrapper(upsertThreadSaga);
			saga.setup(call(axios.put, 'http://test-site/api/thread/1', thread), thread);
			saga.expectPut({
				type: actions.UPSERT_THREAD_SUCCESS,
				data: thread
			});
			saga.expectPut({
				type: actions.FETCH_ACTIVE_THREADS
			});
			saga.expectPut({
				type: actions.FETCH_ARCHIVED_THREADS
			});
			return saga.execute({
				type: actions.UPSERT_THREAD,
				data: thread
			});
		});
		it('should dispatch failure action on failed PUT', () => {
			const thread = {
				threadId: 1
			};
			const saga = new SagaTestWrapper(upsertThreadSaga);
			saga.setupError(call(axios.put, 'http://test-site/api/thread/1', thread), 'Test error');
			saga.expectPut({
				type: actions.UPSERT_THREAD_FAILURE
			});
			return saga.execute({
				type: actions.UPSERT_THREAD,
				data: thread
			});
		});
	});
	describe('insert', () => {
		it('should create thread when thread has no ID', () => {
			const thread = {
				userTitle: 'Test thread'
			};
			const saga = new SagaTestWrapper(upsertThreadSaga);
			saga.setup(call(axios.post, 'http://test-site/api/thread', thread), thread);
			saga.expectPut({
				type: actions.UPSERT_THREAD_SUCCESS,
				data: thread
			});
			saga.expectPut({
				type: actions.FETCH_ACTIVE_THREADS
			});
			saga.expectPut({
				type: actions.FETCH_ARCHIVED_THREADS
			});
			return saga.execute({
				type: actions.UPSERT_THREAD,
				data: thread
			});
		});
		it('should dispatch failure action on failed POST', () => {
			const thread = {
				userTitle: 'Test thread'
			};
			const saga = new SagaTestWrapper(upsertThreadSaga);
			saga.setupError(call(axios.post, 'http://test-site/api/thread', thread), 'Test error');
			saga.expectPut({
				type: actions.UPSERT_THREAD_FAILURE
			});
			return saga.execute({
				type: actions.UPSERT_THREAD,
				data: thread
			});
		});
	});
	describe('bulk update', () => {
		it('should dispatch events for all updated threads', () => {
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
			const saga = new SagaTestWrapper(upsertThreadSaga);
			saga.setupAll([
				{
					matcher: call(axios.put, 'http://test-site/api/thread/1', threads[0]),
					result: threads[0]
				},
				{
					matcher: call(axios.put, 'http://test-site/api/thread/2', threads[1]),
					result: threads[1]
				}
			]);
			saga.expectPut({
				type: actions.UPSERT_THREAD_SUCCESS,
				data: threads[0]
			});
			saga.expectPut({
				type: actions.UPSERT_THREAD_SUCCESS,
				data: threads[1]
			});
			saga.expectPut({
				type: actions.BULK_UPDATE_THREADS_SUCCESS
			});
			saga.expectPut({
				type: actions.FETCH_ACTIVE_THREADS
			});
			saga.expectPut({
				type: actions.FETCH_ARCHIVED_THREADS
			});
			return saga.execute({
				type: actions.BULK_UPDATE_THREADS,
				data: threads
			});
		});
		it('should dispatch general failure event if unexpected error occurs', () => {
			const saga = new SagaTestWrapper(upsertThreadSaga);
			saga.expectPut({
				type: actions.BULK_UPDATE_THREADS_FAILURE
			});
			return saga.execute({
				type: actions.BULK_UPDATE_THREADS,
				data: null
			});
		});
	});
});
