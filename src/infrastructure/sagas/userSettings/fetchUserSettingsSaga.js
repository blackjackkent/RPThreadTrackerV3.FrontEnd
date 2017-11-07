import { take, put, call } from 'redux-saga/effects';
import axios from 'axios';

import {
	FETCH_USER_SETTINGS,
	fetchedUserSettingsSuccess
} from '../../actions';

export default function* fetchUserSettingsSaga() {
	yield take(FETCH_USER_SETTINGS);
	const response = yield call(axios.get, 'http://localhost:3001/settings');
	yield put(fetchedUserSettingsSuccess(response.data));
}
