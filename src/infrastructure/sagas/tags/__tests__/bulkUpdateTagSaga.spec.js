import axios from 'axios';
import { call } from 'redux-saga/effects';
import bulkUpdateTagSaga from '../bulkUpdateTagSaga';
import * as actions from '../../../actions';
import { SagaTestWrapper } from '../../../../../config/tests/helpers.unit';

global.API_BASE_URL = 'http://test-site/';
describe('saga behavior', () => {
	describe('bulkUpdateTag', () => {
		it('should dispatch success message on successful PUT', () => {
			const selectedTag = 'my tag';
			const updatedValue = 'my tag updated';
			const saga = new SagaTestWrapper(bulkUpdateTagSaga);
			saga.setup(call(axios.put, 'http://test-site/api/thread/tags?currentTag=my%20tag&replacementTag=my%20tag%20updated', {}));
			saga.expectPut({
				type: actions.BULK_UPDATE_TAG_SUCCESS
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
				type: actions.BULK_UPDATE_TAG,
				data: {
					selectedTag,
					updatedValue
				}
			});
		});
		it('should dispatch failure action on failed PUT', () => {
			const selectedTag = 'my tag';
			const updatedValue = 'my tag updated';
			const saga = new SagaTestWrapper(bulkUpdateTagSaga);
			saga.setupError(call(axios.put, 'http://test-site/api/thread/tags?currentTag=my%20tag&replacementTag=my%20tag%20updated', {}), 'Test error');
			saga.expectPut({
				type: actions.BULK_UPDATE_TAG_FAILURE
			});
			return saga.execute({
				type: actions.BULK_UPDATE_TAG,
				data: {
					selectedTag,
					updatedValue
				}
			});
		});
	});
});
