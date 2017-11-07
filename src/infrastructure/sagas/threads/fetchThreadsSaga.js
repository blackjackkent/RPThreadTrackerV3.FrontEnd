import { take, put, call } from 'redux-saga/effects';
import axios from 'axios';

import {
	FETCH_THREADS,
	fetchedThreadsSuccess
} from '../../actions';

export default function* fetchThreadsSaga() {
	yield take(FETCH_THREADS);
	const response = yield call(axios.get, 'http://localhost:3001/threads');
	yield put(fetchedThreadsSuccess(response.data));
}
