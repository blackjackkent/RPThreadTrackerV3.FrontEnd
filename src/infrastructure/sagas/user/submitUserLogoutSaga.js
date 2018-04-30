import { takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import cache from '../../cache';
import cacheKeys from '../../constants/cacheKeys';
import history from '../../history';

import {
	SUBMIT_USER_LOGOUT
} from '../../actions';

function* submitUserLogout() {
	try {
		const refreshToken = cache.get(cacheKeys.REFRESH_TOKEN);
		yield call(axios.post, `${API_BASE_URL}api/auth/revoke`, { RefreshToken: refreshToken });
		cache.clear();
		history.push('/login');
	} catch (e) {
		// eslint-disable-next-line no-empty
	}
}

export default function* submitUserLogoutSaga() {
	yield takeEvery(SUBMIT_USER_LOGOUT, submitUserLogout);
}
