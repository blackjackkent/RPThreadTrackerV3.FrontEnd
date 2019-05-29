import axios from 'axios';
import { call } from 'redux-saga/effects';
import fetchActiveThreadsSaga from '../fetchActiveThreadsSaga';
import * as actions from '../../../actions';
import { SagaTestWrapper } from '~/utility/helpers.unit';

global.API_BASE_URL = 'http://test-site/';
describe('saga behavior', () => {
	it('should dispatch success action on successful GET', () => {
		const response = { data: [{ threadId: 1 }, { threadId: 2 }, { threadId: 3 }] };
		const saga = new SagaTestWrapper(fetchActiveThreadsSaga);
		saga.setup(call(axios.get, 'http://test-site/api/thread'), response);
		saga.expectPut({
			type: actions.FETCHED_ACTIVE_THREADS_SUCCESS,
			data: response.data
		});
		saga.expectPut({
			type: actions.FETCH_ACTIVE_THREADS_STATUS,
			data: response.data
		});
		return saga.execute({ type: actions.FETCH_ACTIVE_THREADS });
	});
	it('should dispatch failure action on failed GET', () => {
		const saga = new SagaTestWrapper(fetchActiveThreadsSaga);
		saga.setupError(call(axios.get, 'http://test-site/api/thread'), 'Test error');
		saga.expectPut({
			type: actions.FETCHED_ACTIVE_THREADS_FAILURE
		});
		return saga.execute({ type: actions.FETCH_ACTIVE_THREADS });
	});
});
