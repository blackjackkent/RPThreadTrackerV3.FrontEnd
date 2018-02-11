import { takeEvery } from 'redux-saga/effects';
import cache from '../../cache';
import history from '../../history';

import {
	SUBMIT_USER_LOGOUT
} from '../../actions';

function submitUserLogout() {
	cache.clear();
	history.push('/login');
}

export default function* submitUserLogoutSaga() {
	yield takeEvery(SUBMIT_USER_LOGOUT, submitUserLogout);
}
