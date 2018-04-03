import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import history from '../../history';

import {
	SUBMIT_USER_FORGOT_PASSWORD,
	userForgotPasswordFailure,
	userForgotPasswordSuccess
} from '../../actions';

function* submitUserForgotPassword(action) {
	try {
		yield call(axios.post, `${API_BASE_URL}api/auth/forgotpassword`, action.data);
		history.push('/login');
		yield put(userForgotPasswordSuccess());
	} catch (e) {
		yield put(userForgotPasswordFailure(e.response.data));
	}
}

export default function* submitUserForgotPasswordSaga() {
	yield takeEvery(SUBMIT_USER_FORGOT_PASSWORD, submitUserForgotPassword);
}
