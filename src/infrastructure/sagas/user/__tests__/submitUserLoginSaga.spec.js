import axios from 'axios';
import { call } from 'redux-saga/effects';
import submitUserLoginSaga from '../submitUserLoginSaga';
import * as actions from '../../../actions';
import * as cache from '../../../cache';
import * as history from '../../../../utility/history';
import { SagaTestWrapper } from '~/testhelpers/helpers.unit';

global.API_BASE_URL = 'http://test-site/';
jest.mock('../../../cache', () => ({
	set: jest.fn()
}));
jest.mock('../../../../utility/history', () => ({
	navigation: {
		navigateTo: jest.fn()
	}
}));
beforeEach(() => {
	jest.resetAllMocks();
});
describe('saga behavior', () => {
	describe('update', () => {
		it('should dispatch success action on successful POST when login action', () => {
			const data = {
				username: 'my-user'
			};
			const response = {
				data: {
					token: {
						token: '12345'
					},
					refreshToken: {
						token: '54321'
					}
				}
			};
			const saga = new SagaTestWrapper(submitUserLoginSaga);
			saga.setup(call(axios.post, 'http://test-site/api/auth/token', data), response);
			saga.expectPut({
				type: actions.SUBMIT_USER_LOGIN_SUCCESS
			});
			return saga
				.execute({
					type: actions.SUBMIT_USER_LOGIN,
					data
				})
				.then(() => {
					expect(cache.set).toHaveBeenCalledTimes(2);
					expect(cache.set).toHaveBeenCalledWith('accessToken', '12345');
					expect(cache.set).toHaveBeenCalledWith('refreshToken', '54321');
					expect(history.navigation.navigateTo).toHaveBeenCalledTimes(1);
					expect(history.navigation.navigateTo).toHaveBeenCalledWith('/dashboard');
				});
		});
		it('should dispatch success action on successful POST when successful registration', () => {
			const data = {
				username: 'my-user'
			};
			const response = {
				data: {
					token: {
						token: '12345'
					},
					refreshToken: {
						token: '54321'
					}
				}
			};
			const saga = new SagaTestWrapper(submitUserLoginSaga);
			saga.setup(call(axios.post, 'http://test-site/api/auth/token', data), response);
			saga.expectPut({
				type: actions.SUBMIT_USER_LOGIN_SUCCESS
			});
			return saga
				.execute({
					type: actions.SUBMIT_USER_REGISTRATION_SUCCESS,
					data
				})
				.then(() => {
					expect(cache.set).toHaveBeenCalledTimes(2);
					expect(cache.set).toHaveBeenCalledWith('accessToken', '12345');
					expect(cache.set).toHaveBeenCalledWith('refreshToken', '54321');
					expect(history.navigation.navigateTo).toHaveBeenCalledTimes(1);
					expect(history.navigation.navigateTo).toHaveBeenCalledWith('/dashboard');
				});
		});
		it('should dispatch failure action on failed POST', () => {
			const data = {
				username: 'my-user'
			};
			const saga = new SagaTestWrapper(submitUserLoginSaga);
			saga.setupError(call(axios.post, 'http://test-site/api/auth/token', data), 'Error', {
				data: 'response data'
			});
			saga.expectPut({
				type: actions.SUBMIT_USER_LOGIN_FAILURE,
				data: 'response data'
			});
			return saga.execute({
				type: actions.SUBMIT_USER_LOGIN,
				data
			});
		});
	});
});
