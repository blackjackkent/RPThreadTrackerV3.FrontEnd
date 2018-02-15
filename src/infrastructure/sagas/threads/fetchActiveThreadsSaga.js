import { takeLatest, put, call, all } from 'redux-saga/effects';
import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import cache from '../../cache';

import {
	FETCH_ACTIVE_THREADS,
	fetchedActiveThreadsSuccess,
	fetchedActiveThreadsFailure,
	fetchActiveThreadsStatus
} from '../../actions';

function* fetchActiveThreads() {
	try {
		let threadData = cache.get('activeThreads');
		if (!threadData) {
			const response = yield call(axios.get, `${API_BASE_URL}api/thread`);
			threadData = response.data;
			cache.set('activeThreads', threadData);
		}
		yield all([
			put(fetchedActiveThreadsSuccess(threadData)),
			put(fetchActiveThreadsStatus(threadData))
		]);
	} catch (e) {
		yield put(fetchedActiveThreadsFailure());
	}
}

export default function* fetchActiveThreadsSaga() {
	yield takeLatest(FETCH_ACTIVE_THREADS, fetchActiveThreads);
}
