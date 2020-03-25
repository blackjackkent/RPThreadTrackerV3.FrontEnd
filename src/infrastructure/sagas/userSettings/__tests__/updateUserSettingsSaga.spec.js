import axios from 'axios';
import { call } from 'redux-saga/effects';
import updateUserSettingsSaga from '../updateUserSettingsSaga';
import * as actions from '../../../actions';
import { SagaTestWrapper } from '~/testhelpers/helpers.unit';

global.API_BASE_URL = 'http://test-site/';
describe('saga behavior', () => {
	describe('update', () => {
		it('should dispatch success action on successful PUT when shouldSkipViewUpdate is false', () => {
			const data = {
				lastNewsReadDate: Date.now()
			};
			const saga = new SagaTestWrapper(updateUserSettingsSaga);
			saga.setup(call(axios.put, 'http://test-site/api/profilesettings', data), {});
			saga.expectPut({
				type: actions.UPDATED_USER_SETTINGS_SUCCESS,
				data
			});
			return saga.execute({
				type: actions.UPDATE_USER_SETTINGS,
				data
			});
		});
		it('should dispatch failure action on failed PUT when shouldSkipViewUpdate is false', () => {
			const data = {
				email: 'test@test.com'
			};
			const saga = new SagaTestWrapper(updateUserSettingsSaga);
			saga.setupError(call(axios.put, 'http://test-site/api/profilesettings', data), 'Error');
			saga.expectPut({
				type: actions.UPDATED_USER_SETTINGS_FAILURE
			});
			return saga.execute({
				type: actions.UPDATE_USER_SETTINGS,
				data
			});
		});
		it('should dispatch failure action on failed PUT when shouldSkipViewUpdate is true', () => {
			const data = {
				email: 'test@test.com'
			};
			const saga = new SagaTestWrapper(updateUserSettingsSaga);
			saga.setupError(call(axios.put, 'http://test-site/api/profilesettings', data), 'Error');
			saga.expectPut({
				type: actions.UPDATED_USER_SETTINGS_FAILURE
			});
			return saga.execute({
				type: actions.UPDATE_USER_SETTINGS,
				data,
				shouldSkipViewUpdate: true
			});
		});
		it('should do nothing on successful PUT when shouldSkipViewUpdate is true', () => {
			const data = {
				email: 'test@test.com'
			};
			const saga = new SagaTestWrapper(updateUserSettingsSaga);
			saga.setup(call(axios.put, 'http://test-site/api/profilesettings', data), {});
			return saga
				.execute({
					type: actions.UPDATE_USER_SETTINGS,
					data,
					shouldSkipViewUpdate: true
				})
				.then((result) => {
					expect(result.effects.put).toBeUndefined();
				});
		});
	});
});
