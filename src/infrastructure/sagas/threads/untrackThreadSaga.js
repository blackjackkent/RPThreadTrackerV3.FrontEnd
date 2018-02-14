import { takeEvery, put, call, all } from 'redux-saga/effects';
import axios from 'axios';
import cache from '../../cache';

import {
	UNTRACK_THREAD,
	untrackThreadSuccess,
	untrackThreadFailure,
	fetchActiveThreads,
	fetchArchivedThreads
} from '../../actions';

function* untrackThread(action) {
	try {
		const threadData = action.data;
		yield call(axios.delete, `${API_BASE_URL}api/thread/${threadData.thread.threadId}`);
		cache.clearKey('activeThreads');
		cache.clearKey('archivedThreads');
		yield all([
			put(untrackThreadSuccess()),
			put(fetchActiveThreads()),
			put(fetchArchivedThreads())
		]);
	} catch (e) {
		yield put(untrackThreadFailure());
	}
}

export default function* untrackThreadSaga() {
	yield takeEvery(UNTRACK_THREAD, untrackThread);
}
