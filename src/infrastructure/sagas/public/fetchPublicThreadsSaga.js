// #region imports
import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
	FETCH_PUBLIC_THREADS,
	fetchedPublicThreadsSuccess,
	fetchedPublicThreadsFailure
} from '../../actions';
// #endregion imports

function* fetchPublicThreads(action) {
	try {
		const slug = action.data;
		const response = yield call(axios.get, `${API_BASE_URL}api/publicthread/${slug}`);
		yield put(fetchedPublicThreadsSuccess(response.data));
	} catch (e) {
		yield put(fetchedPublicThreadsFailure());
	}
}

export default function* fetchPublicThreadsSaga() {
	yield takeLatest(FETCH_PUBLIC_THREADS, fetchPublicThreads);
}
