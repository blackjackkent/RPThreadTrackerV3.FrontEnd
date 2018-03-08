import { takeEvery } from 'redux-saga/effects';
import cache from '../cache';

import {
	SUBMIT_USER_LOGOUT
} from '../actions';

function clearCache() {
	cache.clear();
}

export default function* fetchActiveThreadsSaga() {
	yield takeEvery(SUBMIT_USER_LOGOUT, clearCache);
}
