import axios from 'axios';
import { call } from 'redux-saga/effects';
import submitUserAccountDeletionSaga from '../submitUserAccountDeletionSaga';
import * as actions from '~/infrastructure/actions';
import * as cache from '~/infrastructure/cache';
import * as history from '../../../../utility/history';
import { SagaTestWrapper } from '~/testhelpers/helpers.unit';

global.API_BASE_URL = 'http://test-site/';
jest.mock('../../../cache', () => ({
	clear: jest.fn()
}));
jest.mock('../../../../utility/history', () => ({
	navigation: {
		navigateTo: jest.fn()
	}
}));
describe('saga behavior', () => {
	describe('update', () => {
		it('should dispatch success action on successful DELETE', () => {
			const saga = new SagaTestWrapper(submitUserAccountDeletionSaga);
			saga.setup(call(axios.delete, 'http://test-site/api/user'), {});
			saga.expectPut({
				type: actions.SUBMIT_USER_ACCOUNT_DELETION_SUCCESS
			});
			return saga
				.execute({
					type: actions.SUBMIT_USER_ACCOUNT_DELETION
				})
				.then(() => {
					expect(cache.clear).toHaveBeenCalledTimes(1);
					expect(history.navigation.navigateTo).toHaveBeenCalledTimes(1);
					expect(history.navigation.navigateTo).toHaveBeenCalledWith('/login');
				});
		});
		it('should dispatch failure action on failed DELETE', () => {
			const saga = new SagaTestWrapper(submitUserAccountDeletionSaga);
			saga.setupError(call(axios.delete, 'http://test-site/api/user'), 'Error', {
				data: 'response data'
			});
			saga.expectPut({
				type: actions.SUBMIT_USER_ACCOUNT_DELETION_FAILURE,
				data: 'response data'
			});
			return saga.execute({
				type: actions.SUBMIT_USER_ACCOUNT_DELETION
			});
		});
	});
});
