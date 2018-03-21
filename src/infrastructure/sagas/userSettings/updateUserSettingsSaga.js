import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';

import {
	UPDATE_USER_SETTINGS,
	updatedUserSettingsSuccess,
	updatedUserSettingsFailure
} from '../../actions';

function* updateUserProfileSettings(action) {
	try {
		yield call(axios.put, `${API_BASE_URL}api/profilesettings`, action.data);
		if (!action.shouldSkipViewUpdate) {
			yield put(updatedUserSettingsSuccess(action.data));
		}
	} catch (e) {
		yield put(updatedUserSettingsFailure());
	}
}

export default function* updateUserSettingsSaga() {
	yield takeLatest(UPDATE_USER_SETTINGS, updateUserProfileSettings);
}
