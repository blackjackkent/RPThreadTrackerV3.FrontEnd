// #region imports
import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_TAGS, fetchedTagsSuccess, fetchedTagsFailure } from '../../actions';
// #endregion imports

function* fetchTags() {
	try {
		const response = yield call(axios.get, `${API_BASE_URL}api/thread/tags`);
		const tags = response.data;
		yield put(fetchedTagsSuccess(tags));
	} catch (e) {
		yield put(fetchedTagsFailure());
	}
}

export default function* fetchTagsSaga() {
	yield takeLatest(FETCH_TAGS, fetchTags);
}
