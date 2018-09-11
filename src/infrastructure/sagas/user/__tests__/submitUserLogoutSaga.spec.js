import axios from 'axios';
import { call } from 'redux-saga/effects';
import submitUserLogoutSaga from '../submitUserLogoutSaga';
import * as actions from '../../../actions';
import * as cache from '../../../cache';
import * as history from '../../../../utility/history';
import { SagaTestWrapper } from '../../../../../config/tests/helpers.unit';

global.API_BASE_URL = 'http://test-site/';
jest.mock('../../../cache', () => ({
	clear: jest.fn(),
	get: jest.fn(() => '12345')
}));
jest.mock('../../../../utility/history', () => ({
	navigation: {
		navigateTo: jest.fn()
	}
}));
describe('saga behavior', () => {
	describe('update', () => {
		it('should dispatch success action on successful POST', () => {
			const saga = new SagaTestWrapper(submitUserLogoutSaga);
			const request = {
				refreshToken: '12345'
			};
			saga.setup(call(axios.post, 'http://test-site/api/auth/revoke', request), {});
			return saga.execute({
				type: actions.SUBMIT_USER_LOGOUT
			}).then(() => {
				expect(cache.get).toHaveBeenCalledTimes(1);
				expect(cache.get).toHaveBeenCalledWith('refreshToken');
				expect(cache.clear).toHaveBeenCalledTimes(1);
				expect(history.navigation.navigateTo).toHaveBeenCalledTimes(1);
				expect(history.navigation.navigateTo).toHaveBeenCalledWith('/login');
			});
		});
		it('should not error on failed POST', () => {
			const saga = new SagaTestWrapper(submitUserLogoutSaga);
			const request = {
				refreshToken: '12345'
			};
			saga.setupError(call(axios.post, 'http://test-site/api/auth/revoke', request), 'Error');
			return saga.execute({
				type: actions.SUBMIT_USER_LOGOUT
			});
		});
	});
});
