import { takeEvery, put, call, all } from 'redux-saga/effects';
import axios from 'axios';

import {
	UNTRACK_THREAD,
	BULK_UNTRACK_THREADS,
	untrackThreadSuccess,
	untrackThreadFailure,
	bulkUntrackThreadsSuccess,
	bulkUntrackThreadsFailure,
	fetchActiveThreads,
	fetchArchivedThreads
} from '../../actions';

function* untrackThread(thread) {
	try {
		yield call(axios.delete, `${API_BASE_URL}api/thread/${thread.threadId}`);
		yield all([
			put(untrackThreadSuccess()),
			put(fetchActiveThreads()),
			put(fetchArchivedThreads())
		]);
	} catch (e) {
		yield put(untrackThreadFailure());
	}
}

function* untrackIndividualThread(action) {
	const thread = action.data;
	yield call(untrackThread, thread);
}

function* bulkUntrackThreads(action) {
	try {
		const threads = action.data;
		const tasks = [];
		threads.map((t) => tasks.push(call(untrackThread, t)));
		yield all(tasks);
		yield all([
			put(bulkUntrackThreadsSuccess()),
			put(fetchActiveThreads()),
			put(fetchArchivedThreads())
		]);
	} catch (e) {
		yield put(bulkUntrackThreadsFailure());
	}
}

export default function* untrackThreadSaga() {
	yield all([
		takeEvery(UNTRACK_THREAD, untrackIndividualThread),
		takeEvery(BULK_UNTRACK_THREADS, bulkUntrackThreads)
	]);
}
