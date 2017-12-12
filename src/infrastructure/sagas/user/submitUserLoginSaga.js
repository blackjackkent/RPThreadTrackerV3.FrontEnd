import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';

import {
	SUBMIT_USER_LOGIN,
	fetchedUserSuccess
} from '../../actions';

function* submitUserLogin(action) {
	try {
		const response = yield call(axios.post, `${API_BASE_URL}api/auth/token`, action.data);
		console.log(response);
	} catch (e) {
		console.log(e);
	}
}

export default function* submitUserLoginSaga() {
	yield takeEvery(SUBMIT_USER_LOGIN, submitUserLogin);
	// yield put(fetchedUserSuccess(response.data));
}
