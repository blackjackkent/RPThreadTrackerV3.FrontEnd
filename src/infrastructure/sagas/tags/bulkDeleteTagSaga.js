import {
	takeEvery, put, call, all
} from 'redux-saga/effects';
import axios from 'axios';

import {
	fetchTags,
	clearActiveThreads,
	clearArchivedThreads,
	BULK_DELETE_TAG,
	bulkDeleteTagSuccess,
	bulkDeleteTagFailure
} from '../../actions';

function* bulkDeleteTag(action) {
	try {
		const selectedTag = encodeURIComponent(action.data.selectedTag);
		yield call(axios.delete, `${API_BASE_URL}api/thread/tags/${selectedTag}`);
		yield all([
			put(bulkDeleteTagSuccess()),
			put(fetchTags()),
			put(clearActiveThreads()),
			put(clearArchivedThreads())
		]);
	} catch (e) {
		yield put(bulkDeleteTagFailure());
	}
}

export default function* bulkDeleteTagSaga() {
	yield takeEvery(BULK_DELETE_TAG, bulkDeleteTag);
}
