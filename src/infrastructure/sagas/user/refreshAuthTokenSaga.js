import { takeEvery, put, call, all, select, race } from 'redux-saga/effects';
import axios from 'axios';
import cache from '../../cache';
import history from '../../history';
import { getIsRefreshingAuthToken } from '../../selectors';

import {
	REFRESH_AUTH_TOKEN,
	REFRESH_AUTH_TOKEN_SUCCESS,
	REFRESH_AUTH_TOKEN_FAILURE
} from '../../actions';

function* refreshAuthToken(action) {
	const isRefreshing = yield select(getIsRefreshingAuthToken());
	if (isRefreshing) {
		const { error } = yield race({
			success: REFRESH_AUTH_TOKEN_SUCCESS,
			error: REFRESH_AUTH_TOKEN_FAILURE
		});
		return error;
	}
	yield put(tokenRefreshStart())
	try {
		const { refreshToken } = yield select(makeSelectTokens())
		const tokens = yield call(refresh, refreshToken)
		setTokens(tokens)
		yield put(tokenRefreshSuccess(tokens))
		return null
	} catch (err) {
		yield call(logout)
		return err
	}
}

export default function* refreshAuthTokenSaga() {
	yield takeEvery(REFRESH_AUTH_TOKEN, refreshAuthToken);
}
