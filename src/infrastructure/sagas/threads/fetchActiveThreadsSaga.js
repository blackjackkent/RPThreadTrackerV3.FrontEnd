import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';

import {
	FETCH_ACTIVE_THREADS,
	fetchedActiveThreadsSuccess,
	fetchedActiveThreadsFailure
} from '../../actions';

function* fetchActiveThreads() {
	try {
		const response = yield call(axios.get, `${API_BASE_URL}api/thread`);
		yield put(fetchedActiveThreadsSuccess(response.data));
	} catch (e) {
		yield put(fetchedActiveThreadsFailure());
	}
}

export default function* fetchActiveThreadsSaga() {
	yield takeEvery(FETCH_ACTIVE_THREADS, fetchActiveThreads);
}
