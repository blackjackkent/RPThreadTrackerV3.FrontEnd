import axios from 'axios';
import { call } from 'redux-saga/effects';
import submitUserResetPasswordSaga from '../submitUserResetPasswordSaga';
import * as actions from '../../../actions';
import * as history from '../../../../utility/history';
import { SagaTestWrapper } from '~/utility/helpers.unit';

jest.mock('../../../../utility/history', () => ({
	navigation: {
		navigateTo: jest.fn()
	}
}));
global.API_BASE_URL = 'http://test-site/';
describe('saga behavior', () => {
	describe('update', () => {
		it('should dispatch success action on successful POST', () => {
			const data = { newPassword: 'my-password' };
			const saga = new SagaTestWrapper(submitUserResetPasswordSaga);
			saga.setup(call(axios.post, 'http://test-site/api/auth/resetpassword', data), {});
			saga.expectPut({
				type: actions.SUBMIT_USER_RESET_PASSWORD_SUCCESS
			});
			return saga.execute({
				type: actions.SUBMIT_USER_RESET_PASSWORD,
				data
			}).then(() => {
				expect(history.navigation.navigateTo).toHaveBeenCalledTimes(1);
				expect(history.navigation.navigateTo).toHaveBeenLastCalledWith('/login');
			});
		});
		it('should dispatch failure action on failed POST', () => {
			const data = { newPassword: 'my-password' };
			const saga = new SagaTestWrapper(submitUserResetPasswordSaga);
			saga.setupError(call(axios.post, 'http://test-site/api/auth/resetpassword', data), 'Error', { data: 'response data' });
			saga.expectPut({
				type: actions.SUBMIT_USER_RESET_PASSWORD_FAILURE,
				data: 'response data'
			});
			return saga.execute({
				type: actions.SUBMIT_USER_RESET_PASSWORD,
				data
			});
		});
	});
});
