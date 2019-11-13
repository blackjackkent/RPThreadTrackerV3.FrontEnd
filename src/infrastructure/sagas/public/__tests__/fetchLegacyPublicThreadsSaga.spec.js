import axios from 'axios';
import { call } from 'redux-saga/effects';
import fetchLegacyPublicThreadsSaga from '../fetchLegacyPublicThreadsSaga';
import * as actions from '../../../actions';
import { SagaTestWrapper } from '~/testhelpers/helpers.unit';

global.API_BASE_URL = 'http://test-site/';
describe('saga behavior', () => {
	it('should dispatch success action on successful POST', () => {
		const body = {
			slug: 'legacy'
		};
		const response = { data: [{ threadId: 1 }, { threadId: 2 }, { threadId: 3 }] };
		const saga = new SagaTestWrapper(fetchLegacyPublicThreadsSaga);
		saga.setup(call(axios.post, 'http://test-site/api/publicthread', body), response);
		saga.expectPut({
			type: actions.FETCHED_PUBLIC_THREADS_SUCCESS,
			data: response.data
		});
		saga.expectPut({
			type: actions.FETCH_PUBLIC_THREADS_STATUS,
			data: response.data
		});
		return saga.execute({ type: actions.FETCH_LEGACY_PUBLIC_THREADS, data: body });
	});
	it('should dispatch failure action on failed POST', () => {
		const body = { slug: 'legacy' };
		const saga = new SagaTestWrapper(fetchLegacyPublicThreadsSaga);
		saga.setupError(call(axios.post, 'http://test-site/api/publicthread', body), 'Test error');
		saga.expectPut({
			type: actions.FETCHED_PUBLIC_THREADS_FAILURE
		});
		return saga.execute({ type: actions.FETCH_LEGACY_PUBLIC_THREADS, data: body });
	});
});
