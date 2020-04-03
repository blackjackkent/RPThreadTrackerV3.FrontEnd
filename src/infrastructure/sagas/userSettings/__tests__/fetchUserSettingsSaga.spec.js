import axios from 'axios';
import { call } from 'redux-saga/effects';
import fetchUserSettingsSaga from '../fetchUserSettingsSaga';
import * as actions from '../../../actions';
import { SagaTestWrapper } from '~/testhelpers/helpers.unit';

global.API_BASE_URL = 'http://test-site/';
describe('saga behavior', () => {
	it('should dispatch success action on successful GET', () => {
		const settings = {
			data: {
				settingsId: '12345',
				username: 'testuser'
			}
		};
		const saga = new SagaTestWrapper(fetchUserSettingsSaga);
		saga.setup(call(axios.get, 'http://test-site/api/profilesettings'), settings);
		saga.expectPut({
			type: actions.FETCHED_USER_SETTINGS_SUCCESS,
			data: settings.data
		});
		return saga.execute({
			type: actions.FETCH_USER_SETTINGS
		});
	});
	it('should dispatch failure action on failed GET', () => {
		const saga = new SagaTestWrapper(fetchUserSettingsSaga);
		saga.setupError(call(axios.get, 'http://test-site/api/profilesettings'), 'Test error');
		saga.expectPut({
			type: actions.FETCHED_USER_SETTINGS_FAILURE
		});
		return saga.execute({
			type: actions.FETCH_USER_SETTINGS
		});
	});
});
