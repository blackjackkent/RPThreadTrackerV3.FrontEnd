import { take, put, call } from 'redux-saga/effects';
import axios from 'axios';

import {
	UPDATE_USER_SETTINGS,
	SET_HAS_DASHBOARD_AT_A_GLANCE_HIDDEN,
	updateUserSettings,
	updatedUserSettingsSuccess,
	updatedUserSettingsFailure
} from '../../actions';

export function* setHasDashboardAtAGlanceHiddenSaga() {
	const action = yield take(SET_HAS_DASHBOARD_AT_A_GLANCE_HIDDEN);
	yield put(updateUserSettings({ hasDashboardAtAGlanceHidden: action.data }));
}

export default function* updateUserSettingsSaga() {
	const action = yield take(UPDATE_USER_SETTINGS);
	try {
		const current = yield call(axios.get, 'http://localhost:3001/settings');
		const newState = Object.assign({}, current.data, action.data);
		const response = yield call(axios.put, 'http://localhost:3001/settings', newState);
		yield put(updatedUserSettingsSuccess(response.data));
	} catch (e) {
		yield put(updatedUserSettingsFailure());
	}
}
