// #region imports
import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
	FETCH_ARCHIVED_THREADS,
	fetchedArchivedThreadsSuccess,
	fetchedArchivedThreadsFailure
} from '../../actions';
// #endregion imports

function* fetchArchivedThreads() {
	try {
		const response = yield call(axios.get, `${API_BASE_URL}api/thread?isArchived=true`);
		const threadData = response.data;
		yield put(fetchedArchivedThreadsSuccess(threadData));
	} catch (e) {
		yield put(fetchedArchivedThreadsFailure());
	}
}

export default function* fetchArchivedThreadsSaga() {
	yield takeLatest(FETCH_ARCHIVED_THREADS, fetchArchivedThreads);
}
