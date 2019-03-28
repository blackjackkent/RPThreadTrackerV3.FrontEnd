// #region imports
import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
	FETCH_ARCHIVED_THREADS,
	fetchedArchivedThreadsSuccess,
	fetchedArchivedThreadsFailure,
	fetchArchivedThreadsStatus
} from '../../actions';
// #endregion imports

function* fetchArchivedThreads(action) {
	try {
		const response = yield call(axios.get, `${API_BASE_URL}api/thread?isArchived=true`);
		const threadData = response.data;
		yield put(fetchedArchivedThreadsSuccess(threadData));
		if (!action.data.shouldSkipStatusFetch) {
			yield put(fetchArchivedThreadsStatus(threadData));
		}
	} catch (e) {
		yield put(fetchedArchivedThreadsFailure());
	}
}

export default function* fetchArchivedThreadsSaga() {
	yield takeLatest(FETCH_ARCHIVED_THREADS, fetchArchivedThreads);
}
