import { takeEvery, put, call, all } from 'redux-saga/effects';
import axios from 'axios';
import cache from '../../cache';

import {
	UPSERT_THREAD,
	BULK_UPDATE_THREADS,
	upsertThreadFailure,
	upsertThreadSuccess,
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
			put(upsertThreadSuccess(thread)),
			put(fetchActiveThreads()),
			put(fetchArchivedThreads())
		]);
	} catch (e) {
		yield put(upsertThreadFailure());
	}
}

function* insertThread(thread) {
	try {
		yield call(axios.post, `${API_BASE_URL}api/thread`, thread);
		cache.clearKey('activeThreads');
		cache.clearKey('archivedThreads');
		yield all([
			put(upsertThreadSuccess(thread)),
			put(fetchActiveThreads()),
			put(fetchArchivedThreads())
		]);
	} catch (e) {
		yield put(upsertThreadFailure());
	}
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

function* upsertIndividualThread(action) {
	const thread = action.data;
	if (thread && thread.threadId) {
		yield call(updateThread, thread);
	} else {
		yield call(insertThread, thread);
	}
}

export default function* upsertThreadSaga() {
	yield all([
		takeEvery(UPSERT_THREAD, upsertIndividualThread),
		takeEvery(BULK_UPDATE_THREADS, bulkUpdateThreads)
	]);
}
