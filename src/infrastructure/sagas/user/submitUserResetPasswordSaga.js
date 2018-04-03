import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import history from '../../history';

import {
	SUBMIT_USER_RESET_PASSWORD,
	userResetPasswordFailure,
	userResetPasswordSuccess
} from '../../actions';

function* submitUserResetPassword(action) {
	try {
		yield call(axios.post, `${API_BASE_URL}api/auth/resetpassword`, action.data);
		history.push('/login');
		yield put(userResetPasswordSuccess());
	} catch (e) {
		yield put(userResetPasswordFailure(e.response.data));
	}
}

export default function* submitUserResetPasswordSaga() {
	yield takeEvery(SUBMIT_USER_RESET_PASSWORD, submitUserResetPassword);
}
