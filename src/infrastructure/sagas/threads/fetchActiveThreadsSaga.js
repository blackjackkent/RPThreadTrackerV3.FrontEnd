import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { toastr } from 'react-redux-toastr'

import {
	FETCH_ACTIVE_THREADS,
	fetchedActiveThreadsSuccess,
	fetchedActiveThreadsFailure
} from '../../actions';

function* fetchActiveThreads() {
	try {
		const response = yield call(axios.get, `${API_BASE_URL}api/thread`);
		if (response.data && response.data.threads && response.data.threads.length > 100) {
			toastr.light('Retrieving more than 100 threads; loading may take several minutes. Archive some threads to reduce loading time.', { status: 'info' });
		}
		yield put(fetchedActiveThreadsSuccess(response.data));
	} catch (e) {
		yield put(fetchedActiveThreadsFailure());
	}
}

export default function* fetchActiveThreadsSaga() {
	yield takeEvery(FETCH_ACTIVE_THREADS, fetchActiveThreads);
}
