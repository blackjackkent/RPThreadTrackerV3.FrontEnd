// #region imports
import { takeEvery, put, call, all } from 'redux-saga/effects';
import axios from 'axios';
import {
	DELETE_PUBLIC_VIEW,
	deletePublicViewSuccess,
	deletePublicViewFailure,
	fetchPublicViews
} from '../../actions';
// #endregion imports

function* deletePublicView(action) {
	try {
		const view = action.data;
		yield call(axios.delete, `${API_BASE_URL}api/publicviewmanagement/${view.id}`);
		yield all([
			put(deletePublicViewSuccess()),
			put(fetchPublicViews())
		]);
	} catch (e) {
		yield put(deletePublicViewFailure());
	}
}

export default function* deletePublicViewSaga() {
	yield takeEvery(DELETE_PUBLIC_VIEW, deletePublicView);
}
