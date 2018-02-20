import { takeEvery, put, call, all } from 'redux-saga/effects';
import axios from 'axios';
import cache from '../../cache';

import {
	UPDATE_THREAD,
	BULK_UPDATE_THREADS,
	updateThreadSuccess,
	updateThreadFailure,
	fetchActiveThreads,
	fetchArchivedThreads,
	bulkUpdateThreadsSuccess,
	bulkUpdateThreadsFailure
} from '../../actions';

function* updateThread(thread) {
	try {
		yield call(axios.put, `${API_BASE_URL}api/thread/${thread.threadId}`, thread);
		cache.clearKey('activeThreads');
		cache.clearKey('archivedThreads');
		yield all([
			put(updateThreadSuccess()),
			put(fetchActiveThreads()),
			put(fetchArchivedThreads())
		]);
	} catch (e) {
		yield put(updateThreadFailure());
	}
}

function* updateIndividualThread(action) {
	const thread = action.data;
	yield call(updateThread, thread);
}

function* bulkUpdateThreads(action) {
	try {
		const threads = action.data;
		const tasks = [];
		threads.map(t => tasks.push(call(updateThread, t)));
		yield all(tasks);
		cache.clearKey('activeThreads');
		cache.clearKey('archivedThreads');
		yield all([
			put(bulkUpdateThreadsSuccess()),
			put(fetchActiveThreads()),
			put(fetchArchivedThreads())
		]);
	} catch (e) {
		yield put(bulkUpdateThreadsFailure());
	}
}

export default function* updateThreadSaga() {
	yield all([
		takeEvery(UPDATE_THREAD, updateIndividualThread),
		takeEvery(BULK_UPDATE_THREADS, bulkUpdateThreads)
	]);
}
