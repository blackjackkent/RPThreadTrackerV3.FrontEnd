import axios from 'axios';
import { call } from 'redux-saga/effects';
import submitUserForgotPasswordSaga from '../submitUserForgotPasswordSaga';
import * as actions from '../../../actions';
import { SagaTestWrapper } from '~/utility/helpers.unit';

global.API_BASE_URL = 'http://test-site/';
describe('saga behavior', () => {
	describe('update', () => {
		it('should dispatch success action on successful POST', () => {
			const data = { newPassword: 'my-password' };
			const saga = new SagaTestWrapper(submitUserForgotPasswordSaga);
			saga.setup(call(axios.post, 'http://test-site/api/auth/forgotpassword', data), data);
			saga.expectPut({
				type: actions.SUBMIT_USER_FORGOT_PASSWORD_SUCCESS
			});
			return saga.execute({
				type: actions.SUBMIT_USER_FORGOT_PASSWORD,
				data
			});
		});
		it('should dispatch failure action on failed POST', () => {
			const data = { newPassword: 'my-password' };
			const saga = new SagaTestWrapper(submitUserForgotPasswordSaga);
			saga.setupError(call(axios.post, 'http://test-site/api/auth/forgotpassword', data), 'Error', { data: 'response data' });
			saga.expectPut({
				type: actions.SUBMIT_USER_FORGOT_PASSWORD_FAILURE,
				data: 'response data'
			});
			return saga.execute({
				type: actions.SUBMIT_USER_FORGOT_PASSWORD,
				data
			});
		});
	});
});
