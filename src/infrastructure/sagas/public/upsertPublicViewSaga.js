import { takeEvery, put, call, all } from 'redux-saga/effects';
import axios from 'axios';
import {
	UPSERT_PUBLIC_VIEW,
	upsertPublicViewSuccess,
	upsertPublicViewFailure,
	fetchPublicViews
} from '../../actions';

function* updatePublicView(view) {
	try {
		yield call(axios.put, `${API_BASE_URL}api/publicviewmanagement/${view.id}`, view);
		yield all([put(upsertPublicViewSuccess(view)), put(fetchPublicViews())]);
	} catch (e) {
		yield put(upsertPublicViewFailure());
	}
}

function* insertPublicView(view) {
	try {
		yield call(axios.post, `${API_BASE_URL}api/publicviewmanagement`, view);
		yield all([put(upsertPublicViewSuccess(view)), put(fetchPublicViews())]);
	} catch (e) {
		yield put(upsertPublicViewFailure());
	}
}

function* upsertPublicView(action) {
	const view = action.data;
	if (view && view.id) {
		yield call(updatePublicView, view);
	} else {
		yield call(insertPublicView, view);
	}
}

export default function* upsertPublicViewSaga() {
	yield takeEvery(UPSERT_PUBLIC_VIEW, upsertPublicView);
}
