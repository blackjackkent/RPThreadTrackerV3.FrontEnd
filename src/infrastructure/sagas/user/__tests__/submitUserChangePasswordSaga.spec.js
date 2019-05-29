import axios from 'axios';
import { call } from 'redux-saga/effects';
import submitUserChangePasswordSaga from '../submitUserChangePasswordSaga';
import * as actions from '../../../actions';
import { SagaTestWrapper } from '~/utility/helpers.unit';

global.API_BASE_URL = 'http://test-site/';
describe('saga behavior', () => {
	describe('update', () => {
		it('should dispatch success action on successful PUT', () => {
			const data = { newPassword: 'my-password' };
			const saga = new SagaTestWrapper(submitUserChangePasswordSaga);
			saga.setup(call(axios.put, 'http://test-site/api/user/password', data), data);
			saga.expectPut({
				type: actions.SUBMIT_USER_CHANGE_PASSWORD_SUCCESS
			});
			return saga.execute({
				type: actions.SUBMIT_USER_CHANGE_PASSWORD,
				data
			});
		});
		it('should dispatch failure action on failed PUT', () => {
			const data = { newPassword: 'my-password' };
			const saga = new SagaTestWrapper(submitUserChangePasswordSaga);
			saga.setupError(call(axios.put, 'http://test-site/api/user/password', data), 'Error', { data: 'response data' });
			saga.expectPut({
				type: actions.SUBMIT_USER_CHANGE_PASSWORD_FAILURE,
				data: 'response data'
			});
			return saga.execute({
				type: actions.SUBMIT_USER_CHANGE_PASSWORD,
				data
			});
		});
	});
});
