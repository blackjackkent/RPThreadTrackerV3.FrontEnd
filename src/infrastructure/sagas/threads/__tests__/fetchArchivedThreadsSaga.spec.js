import axios from 'axios';
import { call } from 'redux-saga/effects';
import fetchArchivedThreadsSaga from '../fetchArchivedThreadsSaga';
import * as actions from '../../../actions';
import { SagaTestWrapper } from '../../../../../config/tests/helpers.unit';

global.API_BASE_URL = 'http://test-site/';
describe('saga behavior', () => {
	it('should dispatch success action on successful GET', () => {
		const response = { data: [{ threadId: 1 }, { threadId: 2 }, { threadId: 3 }] };
		const saga = new SagaTestWrapper(fetchArchivedThreadsSaga);
		saga.setup(call(axios.get, 'http://test-site/api/thread?isArchived=true'), response);
		saga.expectPut({
			type: actions.FETCHED_ARCHIVED_THREADS_SUCCESS,
			data: response.data
		});
		saga.expectPut({
			type: actions.FETCH_ARCHIVED_THREADS_STATUS,
			data: response.data
		});
		return saga.execute({ type: actions.FETCH_ARCHIVED_THREADS });
	});
	it('should dispatch failure action on failed GET', () => {
		const saga = new SagaTestWrapper(fetchArchivedThreadsSaga);
		saga.setupError(call(axios.get, 'http://test-site/api/thread?isArchived=true'), 'Test error');
		saga.expectPut({
			type: actions.FETCHED_ARCHIVED_THREADS_FAILURE
		});
		return saga.execute({ type: actions.FETCH_ARCHIVED_THREADS });
	});
});
