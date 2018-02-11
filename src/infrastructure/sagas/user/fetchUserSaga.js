import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import cache from '../../cache';

import {
	FETCH_USER,
	fetchedUserSuccess,
	fetchedUserFailure
} from '../../actions';

function* fetchUser() {
	try {
		const user = cache.get('user');
		if (user) {
			yield put(fetchedUserSuccess(user));
			return;
		}
		const response = yield call(axios.get, `${API_BASE_URL}api/user`);
		cache.set('user', response.data);
		yield put(fetchedUserSuccess(response.data));
	} catch (e) {
		yield put(fetchedUserFailure());
	}
}

export default function* fetchUserSaga() {
	yield takeEvery(FETCH_USER, fetchUser);
}
