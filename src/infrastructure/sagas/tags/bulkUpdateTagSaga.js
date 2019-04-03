import {
	takeEvery, put, call, all
} from 'redux-saga/effects';
import axios from 'axios';
import {
	BULK_UPDATE_TAG,
	bulkUpdateTagSuccess,
	bulkUpdateTagFailure,
	fetchTags,
	clearActiveThreads,
	clearArchivedThreads
} from '../../actions';

function* bulkUpdateTag(action) {
	try {
		const currentTag = encodeURIComponent(action.data.selectedTag);
		const replacementTag = encodeURIComponent(action.data.updatedValue);
		yield call(
			axios.put,
			`${API_BASE_URL}api/thread/tags?currentTag=${currentTag}&replacementTag=${replacementTag}`,
			{}
		);
		yield all([
			put(bulkUpdateTagSuccess()),
			put(fetchTags()),
			put(clearActiveThreads()),
			put(clearArchivedThreads())
		]);
	} catch (e) {
		yield put(bulkUpdateTagFailure());
	}
}

export default function* bulkUpdateTagSaga() {
	yield takeEvery(BULK_UPDATE_TAG, bulkUpdateTag);
}
