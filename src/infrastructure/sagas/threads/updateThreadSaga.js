import { takeEvery, put, call, all } from 'redux-saga/effects';
import axios from 'axios';
import cache from '../../cache';

import {
	UPDATE_THREAD,
	updateThreadSuccess,
	updateThreadFailure,
	fetchActiveThreads,
	fetchArchivedThreads
} from '../../actions';

function* updateThread(action) {
	try {
		const thread = action.data;
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

export default function* updateThreadSaga() {
	yield takeEvery(UPDATE_THREAD, updateThread);
}
