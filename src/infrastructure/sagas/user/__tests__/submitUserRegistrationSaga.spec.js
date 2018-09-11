import axios from 'axios';
import { call } from 'redux-saga/effects';
import submitUserRegistrationSaga from '../submitUserRegistrationSaga';
import * as actions from '../../../actions';
import { SagaTestWrapper } from '../../../../../config/tests/helpers.unit';

global.API_BASE_URL = 'http://test-site/';
describe('saga behavior', () => {
	describe('update', () => {
		it('should dispatch success action on successful POST', () => {
			const data = { username: 'my-user' };
			const saga = new SagaTestWrapper(submitUserRegistrationSaga);
			saga.setup(call(axios.post, 'http://test-site/api/auth/register', data), data);
			saga.expectPut({
				type: actions.SUBMIT_USER_REGISTRATION_SUCCESS,
				data
			});
			return saga.execute({
				type: actions.SUBMIT_USER_REGISTRATION,
				data
			});
		});
		it('should dispatch failure action on failed POST', () => {
			const data = { username: 'my-user' };
			const saga = new SagaTestWrapper(submitUserRegistrationSaga);
			saga.setupError(call(axios.post, 'http://test-site/api/auth/register', data), 'Error', { data: 'response data' });
			saga.expectPut({
				type: actions.SUBMIT_USER_REGISTRATION_FAILURE,
				data: 'response data'
			});
			return saga.execute({
				type: actions.SUBMIT_USER_REGISTRATION,
				data
			});
		});
	});
});
