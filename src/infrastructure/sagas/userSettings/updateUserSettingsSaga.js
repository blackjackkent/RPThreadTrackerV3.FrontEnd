import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';

import {
	UPDATE_USER_SETTINGS,
	SET_SHOW_DASHBOARD_THREAD_DISTRIBUTION,
	updateUserSettings,
	updatedUserSettingsSuccess,
	updatedUserSettingsFailure
} from '../../actions';

function* updateUserProfileSettings(action) {
	try {
		const current = yield call(axios.get, `${API_BASE_URL}api/profilesettings`);
		const newState = Object.assign({}, current.data, action.data);
		yield call(axios.put, `${API_BASE_URL}api/profilesettings`, newState);
		yield put(updatedUserSettingsSuccess(newState));
	} catch (e) {
		yield put(updatedUserSettingsFailure());
	}
}

export default function* updateUserSettingsSaga() {
	yield takeEvery(UPDATE_USER_SETTINGS, updateUserProfileSettings);
}
