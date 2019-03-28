import {
	takeEvery, put, call, all
} from 'redux-saga/effects';
import axios from 'axios';

import {
	BULK_UPDATE_TAG, bulkUpdateTagSuccess, bulkUpdateTagFailure, fetchActiveThreads, fetchArchivedThreads, fetchTags
} from '../../actions';

function* bulkUpdateTag(action) {
	try {
		const currentTag = encodeURIComponent(action.data.selectedTag);
		const replacementTag = encodeURIComponent(action.data.updatedValue);
		const shouldRefreshActiveThreads = action.data.shouldRefreshActiveThreads;
		const shouldRefreshArchivedThreads = action.data.shouldRefreshArchivedThreads;
		yield call(axios.put, `${API_BASE_URL}api/thread/tags?currentTag=${currentTag}&replacementTag=${replacementTag}`, {});
		yield all([
			put(bulkUpdateTagSuccess()),
			put(fetchTags())
		]);
		if (shouldRefreshActiveThreads) {
			yield put(fetchActiveThreads(true));
		}
		if (shouldRefreshArchivedThreads) {
			yield put(fetchArchivedThreads(true))
		}
	} catch (e) {
		yield put(bulkUpdateTagFailure());
	}
}

export default function* bulkUpdateTagSaga() {
	yield takeEvery(BULK_UPDATE_TAG, bulkUpdateTag);
}
