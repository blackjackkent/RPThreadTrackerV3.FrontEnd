import axios from 'axios';
import { call } from 'redux-saga/effects';
import submitUserAccountInfoSaga from '../submitUserAccountInfoSaga';
import * as actions from '../../../actions';
import { SagaTestWrapper } from '../../../../../config/tests/helpers.unit';

global.API_BASE_URL = 'http://test-site/';
describe('saga behavior', () => {
	describe('update', () => {
		it('should dispatch success action on successful PUT', () => {
			const data = { email: 'test@test.com' };
			const saga = new SagaTestWrapper(submitUserAccountInfoSaga);
			saga.setup(call(axios.put, 'http://test-site/api/user/accountinfo', data), data);
			saga.expectPut({
				type: actions.SUBMIT_USER_ACCOUNT_INFO_SUCCESS
			});
			return saga.execute({
				type: actions.SUBMIT_USER_ACCOUNT_INFO,
				data
			});
		});
		it('should dispatch failure action on failed PUT', () => {
			const data = { email: 'test@test.com' };
			const saga = new SagaTestWrapper(submitUserAccountInfoSaga);
			saga.setupError(call(axios.put, 'http://test-site/api/user/accountinfo', data), 'Error', { data: 'response data' });
			saga.expectPut({
				type: actions.SUBMIT_USER_ACCOUNT_INFO_FAILURE,
				data: 'response data'
			});
			return saga.execute({
				type: actions.SUBMIT_USER_ACCOUNT_INFO,
				data
			});
		});
	});
});
