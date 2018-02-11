import { takeEvery, take, put, call, all, fork, race } from 'redux-saga/effects';
import axios from 'axios';

import {
	FETCHED_ACTIVE_THREADS_SUCCESS,
	FETCHED_ACTIVE_THREADS_STATUS_CHUNK_SUCCESS,
	FETCHED_ACTIVE_THREADS_STATUS_CHUNK_FAILURE,
	fetchedActiveThreadsStatusSuccess,
	fetchedActiveThreadsStatusFailure,
	fetchedActiveThreadsStatusChunkSuccess,
	fetchedActiveThreadsStatusChunkFailure
} from '../../actions';

function* fetchActiveThreadsStatusChunk(chunk) {
	try {
		const response = yield call(axios.post, `http://localhost:62535/api/thread`, chunk, {
			headers: {
				'Content-Type': 'application/json'
			}
		});
		yield put(fetchedActiveThreadsStatusChunkSuccess(response.data));
	} catch (e) {
		yield put(fetchedActiveThreadsStatusChunkFailure());
	}
}

function* fetchActiveThreadsStatus(action) {
	try {
		const requests = JSON.parse(action.data.threadStatusRequestJson);
		const chunks = [];
		for (let i = 0, j = requests.length; i < j; i += 10) {
			chunks.push(requests.slice(i, i + 10));
		}
		for (let i = 0; i < chunks.length; i++) {
			yield fork(fetchActiveThreadsStatusChunk, chunks[i]);
			yield race({
				success: take(FETCHED_ACTIVE_THREADS_STATUS_CHUNK_SUCCESS),
				error: take(FETCHED_ACTIVE_THREADS_STATUS_CHUNK_FAILURE)
			});
		}
		yield put(fetchedActiveThreadsStatusSuccess());
	} catch (e) {
		yield put(fetchedActiveThreadsStatusFailure());
	}
}

export default function* fetchActiveThreadsStatusSaga() {
	yield takeEvery(FETCHED_ACTIVE_THREADS_SUCCESS, fetchActiveThreadsStatus);
}
