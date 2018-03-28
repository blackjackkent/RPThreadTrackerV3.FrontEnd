import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';

import {
	SUBMIT_USER_REGISTRATION,
	userRegistrationFailure,
	userRegistrationSuccess
} from '../../actions';

function* submitUserRegistration(action) {
	try {
		yield call(axios.post, `${API_BASE_URL}api/auth/register`, action.data);
		yield put(userRegistrationSuccess(action.data));
	} catch (e) {
		yield put(userRegistrationFailure(e.response.data));
	}
}

export default function* submitUserRegistrationSaga() {
	yield takeEvery(SUBMIT_USER_REGISTRATION, submitUserRegistration);
}
