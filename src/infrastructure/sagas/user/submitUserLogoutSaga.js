import { takeEvery } from 'redux-saga/effects';
import ls from 'local-storage';
import history from '../../history';

import {
	SUBMIT_USER_LOGOUT
} from '../../actions';

function submitUserLogout() {
	ls.remove('rpThreadTrackerAccessToken');
	history.push('/login');
}

export default function* submitUserLogoutSaga() {
	yield takeEvery(SUBMIT_USER_LOGOUT, submitUserLogout);
}
