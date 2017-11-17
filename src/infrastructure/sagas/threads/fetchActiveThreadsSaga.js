import { take, put, call } from 'redux-saga/effects';
import axios from 'axios';

import {
	FETCH_ACTIVE_THREADS,
	fetchedActiveThreadsSuccess
} from '../../actions';

export default function* fetchActiveThreadsSaga() {
	yield take(FETCH_ACTIVE_THREADS);
	const response = yield call(axios.get, 'http://localhost:3001/activeThreads');
	yield put(fetchedActiveThreadsSuccess(response.data));
}
