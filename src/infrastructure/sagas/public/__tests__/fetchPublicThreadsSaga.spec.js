import axios from 'axios';
import { call } from 'redux-saga/effects';
import fetchPublicThreadsSaga from '../fetchPublicThreadsSaga';
import * as actions from '../../../actions';
import { SagaTestWrapper } from '~/testhelpers/helpers.unit';

global.API_BASE_URL = 'http://test-site/';
describe('saga behavior', () => {
	it('should dispatch success action on successful GET', () => {
		const response = { data: [{ threadId: 1 }, { threadId: 2 }, { threadId: 3 }] };
		const saga = new SagaTestWrapper(fetchPublicThreadsSaga);
		saga.setup(call(axios.get, 'http://test-site/api/publicthread/test-user/test-slug'), response);
		saga.expectPut({
			type: actions.FETCHED_PUBLIC_THREADS_SUCCESS,
			data: response.data
		});
		saga.expectPut({
			type: actions.FETCH_PUBLIC_THREADS_STATUS,
			data: response.data
		});
		return saga.execute({ type: actions.FETCH_PUBLIC_THREADS, data: { slug: 'test-slug', username: 'test-user' } });
	});
	it('should dispatch failure action on failed GET', () => {
		const saga = new SagaTestWrapper(fetchPublicThreadsSaga);
		saga.setupError(call(axios.get, 'http://test-site/api/publicthread/test-user/test-slug'), 'Test error');
		saga.expectPut({
			type: actions.FETCHED_PUBLIC_THREADS_FAILURE
		});
		return saga.execute({ type: actions.FETCH_PUBLIC_THREADS, data: { slug: 'test-slug', username: 'test-user' } });
	});
});
