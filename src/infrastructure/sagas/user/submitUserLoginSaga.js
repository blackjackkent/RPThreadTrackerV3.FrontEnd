import {
	takeEvery, put, call, all
} from 'redux-saga/effects';
import axios from 'axios';
import cache from '../../cache';
import cacheKeys from '../../constants/cacheKeys';
import { navigation } from '../../../utility/history';

import {
	SUBMIT_USER_LOGIN,
	SUBMIT_USER_REGISTRATION_SUCCESS,
	submitUserLoginFailure,
	submitUserLoginSuccess
} from '../../actions';

function* submitUserLogin(action) {
	try {
		const response = yield call(axios.post, `${API_BASE_URL}api/auth/token`, action.data);
		cache.set(cacheKeys.ACCESS_TOKEN, response.data.token.token);
		cache.set(cacheKeys.REFRESH_TOKEN, response.data.refreshToken.token);
		navigation.navigateTo('/dashboard');
		yield put(submitUserLoginSuccess());
	} catch (e) {
		yield put(submitUserLoginFailure(e.response.data));
	}
}

export default function* submitUserLoginSaga() {
	yield all([
		takeEvery(SUBMIT_USER_LOGIN, submitUserLogin),
		takeEvery(SUBMIT_USER_REGISTRATION_SUCCESS, submitUserLogin)
	]);
}
