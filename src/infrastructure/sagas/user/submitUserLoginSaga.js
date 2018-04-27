import { takeEvery, put, call, all } from 'redux-saga/effects';
import axios from 'axios';
import cache from '../../cache';
import history from '../../history';

import {
	SUBMIT_USER_LOGIN,
	USER_REGISTRATION_SUCCESS,
	userLoginFailure,
	userLoginSuccess
} from '../../actions';

function* submitUserLogin(action) {
	try {
		const response = yield call(axios.post, `${API_BASE_URL}api/auth/token`, action.data);
		cache.set('accessToken', response.data.token.token);
		cache.set('refreshToken', response.data.refresh_token.token);
		history.push('/dashboard');
		yield put(userLoginSuccess());
	} catch (e) {
		yield put(userLoginFailure(e.response.data));
	}
}

export default function* submitUserLoginSaga() {
	yield all([
		takeEvery(SUBMIT_USER_LOGIN, submitUserLogin),
		takeEvery(USER_REGISTRATION_SUCCESS, submitUserLogin)
	]);
}
