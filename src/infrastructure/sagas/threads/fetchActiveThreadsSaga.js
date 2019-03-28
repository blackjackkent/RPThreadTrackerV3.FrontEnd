// #region imports
import {
	takeLatest, put, call, all
} from 'redux-saga/effects';
import axios from 'axios';
import {
	FETCH_ACTIVE_THREADS,
	fetchedActiveThreadsSuccess,
	fetchedActiveThreadsFailure,
	fetchActiveThreadsStatus
} from '../../actions';
// #endregion imports

function* fetchActiveThreads(action) {
	try {
		const response = yield call(axios.get, `${API_BASE_URL}api/thread`);
		const threadData = response.data;
		yield put(fetchedActiveThreadsSuccess(threadData));
		if (!action.data.shouldSkipStatusFetch) {
			yield put(fetchActiveThreadsStatus(threadData))
		}
	} catch (e) {
		yield put(fetchedActiveThreadsFailure());
	}
}

export default function* fetchActiveThreadsSaga() {
	yield takeLatest(FETCH_ACTIVE_THREADS, fetchActiveThreads);
}
