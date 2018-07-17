import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { navigation } from '../../history';

import {
	SUBMIT_USER_RESET_PASSWORD,
	submitUserResetPasswordFailure,
	submitUserResetPasswordSuccess
} from '../../actions';

function* submitUserResetPassword(action) {
	try {
		yield call(axios.post, `${API_BASE_URL}api/auth/resetpassword`, action.data);
		navigation.navigateTo('/login');
		yield put(submitUserResetPasswordSuccess());
	} catch (e) {
		yield put(submitUserResetPasswordFailure(e.response.data));
	}
}

export default function* submitUserResetPasswordSaga() {
	yield takeEvery(SUBMIT_USER_RESET_PASSWORD, submitUserResetPassword);
}
