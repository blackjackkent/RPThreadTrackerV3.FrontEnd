// #region imports
import {
	takeLatest, put, call, all
} from 'redux-saga/effects';
import axios from 'axios';
import {
	FETCH_LEGACY_PUBLIC_THREADS,
	fetchedPublicThreadsSuccess,
	fetchedPublicThreadsFailure,
	fetchPublicThreadsStatus
} from '../../actions';
// #endregion imports

function* fetchLegacyPublicThreads(action) {
	try {
		const body = action.data;
		const response = yield call(axios.post, `${API_BASE_URL}api/publicthread`, body);
		yield all([
			put(fetchedPublicThreadsSuccess(response.data)),
			put(fetchPublicThreadsStatus(response.data))
		]);
	} catch (e) {
		yield put(fetchedPublicThreadsFailure());
	}
}

export default function* fetchLegacyPublicThreadsSaga() {
	yield takeLatest(FETCH_LEGACY_PUBLIC_THREADS, fetchLegacyPublicThreads);
}
