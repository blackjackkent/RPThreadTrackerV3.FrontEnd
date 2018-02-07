import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';

import {
	FETCHED_ACTIVE_THREADS_SUCCESS,
	fetchedActiveThreadsStatusSuccess,
	fetchedActiveThreadsStatusFailure
} from '../../actions';

function* fetchActiveThreadsStatus(action) {
	try {
		const response = yield call(axios.post, `${TUMBLR_CLIENT_BASE_URL}api/thread`, action.data.threadStatusRequestJson, {
			headers: {
				'Content-Type': 'application/json'
			}
		});
		debugger;
		yield put(fetchedActiveThreadsStatusSuccess(response.data));
	} catch (e) {
		debugger;
		yield put(fetchedActiveThreadsStatusFailure());
	}
}

export default function* fetchActiveThreadsStatusSaga() {
	yield takeEvery(FETCHED_ACTIVE_THREADS_SUCCESS, fetchActiveThreadsStatus);
}
