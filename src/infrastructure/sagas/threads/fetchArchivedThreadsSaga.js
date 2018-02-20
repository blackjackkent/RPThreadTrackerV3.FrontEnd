import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import cache from '../../cache';

import {
	FETCH_ARCHIVED_THREADS,
	fetchedArchivedThreadsSuccess,
	fetchedArchivedThreadsFailure
} from '../../actions';

function* fetchArchivedThreads() {
	try {
		let threadData = cache.get('archivedThreads');
		if (!threadData) {
			const response = yield call(axios.get, `${API_BASE_URL}api/thread?isArchived=true`);
			threadData = response.data;
			cache.set('archivedThreads', threadData);
		}
		yield put(fetchedArchivedThreadsSuccess(threadData));
	} catch (e) {
		yield put(fetchedArchivedThreadsFailure());
	}
}

export default function* fetchArchivedThreadsSaga() {
	yield takeLatest(FETCH_ARCHIVED_THREADS, fetchArchivedThreads);
}
