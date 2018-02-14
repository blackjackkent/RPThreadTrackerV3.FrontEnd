import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import cache from '../../cache';

import {
	FETCH_USER_SETTINGS,
	fetchedUserSettingsSuccess,
	fetchedUserSettingsFailure
} from '../../actions';

function* fetchUserSettings() {
	try {
		const userSettings = cache.get('userSettings');
		if (userSettings) {
			yield put(fetchedUserSettingsSuccess(userSettings));
			return;
		}
		const response = yield call(axios.get, `${API_BASE_URL}api/profilesettings`);
		cache.set('userSettings', response.data);
		yield put(fetchedUserSettingsSuccess(response.data));
	} catch (e) {
		yield put(fetchedUserSettingsFailure());
	}
}

export default function* fetchUserSettingsSaga() {
	yield takeEvery(FETCH_USER_SETTINGS, fetchUserSettings);
}
