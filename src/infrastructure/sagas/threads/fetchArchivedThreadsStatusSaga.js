import {
	takeLatest, put, call, all
} from 'redux-saga/effects';
import axios from 'axios';

import {
	FETCH_ARCHIVED_THREADS_STATUS,
	fetchedArchivedThreadsStatusSuccess,
	fetchedArchivedThreadsStatusFailure,
	fetchedArchivedThreadsStatusChunkFailure,
	fetchedArchivedThreadsStatusChunkSuccess
} from '../../actions';

function* fetchArchivedThreadsStatusChunk(chunk) {
	try {
		const response = yield call(axios.post, `${TUMBLR_CLIENT_BASE_URL}api/thread`, chunk, {
			headers: {
				'Content-Type': 'application/json'
			}
		});
		yield put(fetchedArchivedThreadsStatusChunkSuccess(response.data));
	} catch (e) {
		yield put(fetchedArchivedThreadsStatusChunkFailure());
	}
}

function* fetchArchivedThreadsStatus(action) {
	try {
		const requests = JSON.parse(action.data.threadStatusRequestJson);
		const chunks = [];
		for (let i = 0, j = requests.length; i < j; i += 10) {
			chunks.push(requests.slice(i, i + 10));
		}
		const tasks = [];
		chunks.map(c => tasks.push(call(fetchArchivedThreadsStatusChunk, c)));
		yield all(tasks);
		yield put(fetchedArchivedThreadsStatusSuccess());
	} catch (e) {
		yield put(fetchedArchivedThreadsStatusFailure());
	}
}

export default function* fetchArchivedThreadsStatusSaga() {
	yield takeLatest(FETCH_ARCHIVED_THREADS_STATUS, fetchArchivedThreadsStatus);
}
