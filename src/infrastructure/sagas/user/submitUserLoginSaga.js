import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import ls from 'local-storage';
import cache from '../../cache';
import history from '../../history';

import {
	SUBMIT_USER_LOGIN,
	userLoginFailure,
	userLoginSuccess
} from '../../actions';

function* submitUserLogin(action) {
	try {
		const response = yield call(axios.post, `${API_BASE_URL}api/auth/token`, action.data);
		cache.set('accessToken', response.data.token);
		history.push('/dashboard');
		yield put(userLoginSuccess());
	} catch (e) {
		yield put(userLoginFailure(e.response.data));
	}
}

export default function* submitUserLoginSaga() {
	yield takeEvery(SUBMIT_USER_LOGIN, submitUserLogin);
}
