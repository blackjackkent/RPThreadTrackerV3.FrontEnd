import { takeEvery, all } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';

import {
	FETCHED_ACTIVE_THREADS_SUCCESS,
	UNTRACK_THREAD_FAILURE
} from '../actions';

function displayActiveThreadsCountMessage(action) {
	const threadData = action.data;
	if (threadData && threadData.threads && threadData.threads.length > 100) {
		toastr.light('Retrieving more than 100 threads; loading may take several minutes. Archive some threads to reduce loading time.', { status: 'info' });
	}
}

function displayUntrackThreadError() {
	toastr.error('There was a problem untracking your thread.');
}

export default function* fetchActiveThreadsSaga() {
	yield all([
		takeEvery(FETCHED_ACTIVE_THREADS_SUCCESS, displayActiveThreadsCountMessage),
		takeEvery(UNTRACK_THREAD_FAILURE, displayUntrackThreadError)
	]);
}
