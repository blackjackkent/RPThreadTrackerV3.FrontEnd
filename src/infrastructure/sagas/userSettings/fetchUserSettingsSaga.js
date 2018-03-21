// #region imports
import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';

import {
	FETCH_USER_SETTINGS,
	fetchedUserSettingsSuccess,
	fetchedUserSettingsFailure
} from '../../actions';
// #endregion imports

function* fetchUserSettings() {
	try {
		const response = yield call(axios.get, `${API_BASE_URL}api/profilesettings`);
		yield put(fetchedUserSettingsSuccess(response.data));
	} catch (e) {
		yield put(fetchedUserSettingsFailure());
	}
}

export default function* fetchUserSettingsSaga() {
	yield takeEvery(FETCH_USER_SETTINGS, fetchUserSettings);
}
