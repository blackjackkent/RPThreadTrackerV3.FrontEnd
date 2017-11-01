import { take, put, call, apply } from 'redux-saga/effects'
import axios from 'axios';

import {
	FETCH_USER,
	fetchUser,
	fetchedUserSuccess
} from '../../actions'

export function* fetchUserSaga() {
	const { id } = yield take(FETCH_USER);
	const response = yield call(axios.get, `http://localhost:3001/user`);
	yield put(fetchedUserSuccess(response.data));
}
