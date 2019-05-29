import axios from 'axios';
import { call } from 'redux-saga/effects';
import fetchPublicViewsSaga from '../fetchPublicViewsSaga';
import * as actions from '../../../actions';
import { SagaTestWrapper } from '~/utility/helpers.unit';

global.API_BASE_URL = 'http://test-site/';
describe('saga behavior', () => {
	it('should dispatch success action on successful GET', () => {
		const views = { data: [{ id: 1 }, { id: 2 }, { id: 3 }] };
		const saga = new SagaTestWrapper(fetchPublicViewsSaga);
		saga.setup(call(axios.get, 'http://test-site/api/publicviewmanagement'), views);
		saga.expectPut({
			type: actions.FETCHED_PUBLIC_VIEWS_SUCCESS,
			data: views.data
		});
		return saga.execute({ type: actions.FETCH_PUBLIC_VIEWS });
	});
	it('should dispatch failure action on failed GET', () => {
		const saga = new SagaTestWrapper(fetchPublicViewsSaga);
		saga.setupError(call(axios.get, 'http://test-site/api/publicviewmanagement'), 'Test error');
		saga.expectPut({
			type: actions.FETCHED_PUBLIC_VIEWS_FAILURE
		});
		return saga.execute({ type: actions.FETCH_PUBLIC_VIEWS });
	});
});
