import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import cache from '../../cache';

import {
	UPDATE_USER_SETTINGS,
	updatedUserSettingsSuccess,
	updatedUserSettingsFailure
} from '../../actions';

function* updateUserProfileSettings(action) {
	try {
		const current = cache.get('userSettings');
		const newState = Object.assign({}, current, action.data);
		yield call(axios.put, `${API_BASE_URL}api/profilesettings`, newState);
		cache.set('userSettings', newState);
		yield put(updatedUserSettingsSuccess(newState));
	} catch (e) {
		yield put(updatedUserSettingsFailure());
	}
}

export default function* updateUserSettingsSaga() {
	yield takeLatest(UPDATE_USER_SETTINGS, updateUserProfileSettings);
}
