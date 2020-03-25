// #region imports
import { takeLatest, put, call, all } from 'redux-saga/effects';
import axios from 'axios';
import {
	FETCH_PUBLIC_THREADS,
	fetchedPublicThreadsSuccess,
	fetchedPublicThreadsFailure,
	fetchPublicThreadsStatus
} from '../../actions';
// #endregion imports

function* fetchPublicThreads(action) {
	try {
		const { slug, username } = action.data;
		const response = yield call(
			axios.get,
			`${API_BASE_URL}api/publicthread/${username}/${slug}`
		);
		yield all([
			put(fetchedPublicThreadsSuccess(response.data)),
			put(fetchPublicThreadsStatus(response.data))
		]);
	} catch (e) {
		yield put(fetchedPublicThreadsFailure());
	}
}

export default function* fetchPublicThreadsSaga() {
	yield takeLatest(FETCH_PUBLIC_THREADS, fetchPublicThreads);
}
