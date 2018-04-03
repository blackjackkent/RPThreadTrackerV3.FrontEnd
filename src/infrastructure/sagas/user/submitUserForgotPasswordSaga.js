import { takeEvery, put, call, all } from 'redux-saga/effects';
import axios from 'axios';
import cache from '../../cache';
import history from '../../history';

import {
	SUBMIT_USER_FORGOT_PASSWORD,
	userForgotPasswordFailure,
	userForgotPasswordSuccess
} from '../../actions';

function* submitUserForgotPassword(action) {
	try {
		yield call(axios.post, `${API_BASE_URL}api/auth/forgotpassword`, action.data);
		yield put(userForgotPasswordSuccess());
	} catch (e) {
		yield put(userForgotPasswordFailure(e.response.data));
	}
}

export default function* submitUserForgotPasswordSaga() {
	yield takeEvery(SUBMIT_USER_FORGOT_PASSWORD, submitUserForgotPassword);
}
