import axios from 'axios';
import { call } from 'redux-saga/effects';
import fetchUserSaga from '../fetchUserSaga';
import * as actions from '../../../actions';
import { SagaTestWrapper } from '~/testhelpers/helpers.unit';

global.API_BASE_URL = 'http://test-site/';
describe('saga behavior', () => {
	it('should dispatch success action on successful GET', () => {
		const user = {
			data: {
				id: '12345',
				username: 'testuser'
			}
		};
		const saga = new SagaTestWrapper(fetchUserSaga);
		saga.setup(call(axios.get, 'http://test-site/api/user'), user);
		saga.expectPut({
			type: actions.FETCHED_USER_SUCCESS,
			data: user.data
		});
		return saga.execute({
			type: actions.FETCH_USER
		});
	});
	it('should dispatch failure action on failed GET', () => {
		const saga = new SagaTestWrapper(fetchUserSaga);
		saga.setupError(call(axios.get, 'http://test-site/api/user'), 'Test error');
		saga.expectPut({
			type: actions.FETCHED_USER_FAILURE
		});
		return saga.execute({
			type: actions.FETCH_USER
		});
	});
});
