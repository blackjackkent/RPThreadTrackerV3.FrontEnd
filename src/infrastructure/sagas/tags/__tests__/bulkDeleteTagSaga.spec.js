import axios from 'axios';
import { call } from 'redux-saga/effects';
import bulkDeleteTagSaga from '../bulkDeleteTagSaga';
import * as actions from '../../../actions';
import { SagaTestWrapper } from '~/testhelpers/helpers.unit';

global.API_BASE_URL = 'http://test-site/';
describe('saga behavior', () => {
	describe('bulkDeleteTag', () => {
		it('should dispatch success message on successful DELETE', () => {
			const tag = 'my tag';
			const saga = new SagaTestWrapper(bulkDeleteTagSaga);
			saga.setup(call(axios.delete, 'http://test-site/api/thread/tags/my%20tag'));
			saga.expectPut({
				type: actions.BULK_DELETE_TAG_SUCCESS
			});
			saga.expectPut({
				type: actions.FETCH_TAGS
			});
			saga.expectPut({
				type: actions.CLEAR_ACTIVE_THREADS
			});
			saga.expectPut({
				type: actions.CLEAR_ARCHIVED_THREADS
			});
			return saga.execute({
				type: actions.BULK_DELETE_TAG,
				data: {
					selectedTag: tag
				}
			});
		});
		it('should dispatch failure action on failed DELETE', () => {
			const tag = 'my tag';
			const saga = new SagaTestWrapper(bulkDeleteTagSaga);
			saga.setupError(
				call(axios.delete, 'http://test-site/api/thread/tags/my%20tag'),
				'Test error'
			);
			saga.expectPut({
				type: actions.BULK_DELETE_TAG_FAILURE
			});
			return saga.execute({
				type: actions.BULK_DELETE_TAG,
				data: {
					selectedTag: tag
				}
			});
		});
	});
});
