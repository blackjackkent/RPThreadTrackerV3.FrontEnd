import { takeLatest, put, call, all } from 'redux-saga/effects';
import axios from 'axios';
import {
	FETCH_PUBLIC_THREADS_STATUS,
	fetchedPublicThreadsStatusSuccess,
	fetchedPublicThreadsStatusFailure,
	fetchedPublicThreadsStatusChunkSuccess,
	fetchedPublicThreadsStatusChunkFailure
} from '../../actions';

function* fetchPublicThreadsStatusChunk(chunk) {
	try {
		const response = yield call(axios.post, `${TUMBLR_CLIENT_BASE_URL}api/thread`, chunk);
		const threads = response.data;
		yield put(fetchedPublicThreadsStatusChunkSuccess(threads));
	} catch (e) {
		yield put(fetchedPublicThreadsStatusChunkFailure());
	}
}

function* fetchPublicThreadsStatus(action) {
	try {
		const requests = JSON.parse(action.data.threadStatusRequestJson);
		const chunks = [];
		for (let i = 0, j = requests.length; i < j; i += 10) {
			chunks.push(requests.slice(i, i + 10));
		}
		const tasks = [];
		chunks.map((c) => tasks.push(call(fetchPublicThreadsStatusChunk, c)));
		yield all(tasks);
		yield put(fetchedPublicThreadsStatusSuccess());
	} catch (e) {
		yield put(fetchedPublicThreadsStatusFailure());
	}
}

export default function* fetchPublicThreadsStatusSaga() {
	yield takeLatest(FETCH_PUBLIC_THREADS_STATUS, fetchPublicThreadsStatus);
}
