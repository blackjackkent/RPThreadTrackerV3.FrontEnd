import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';

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
		yield put(updateThreadSuccess());
		yield put(fetchActiveThreads());
		yield put(fetchArchivedThreads());
	} catch (e) {
		yield put(updateThreadFailure());
	}
}

export default function* updateThreadSaga() {
	yield takeEvery(UPDATE_THREAD, updateThread);
}
