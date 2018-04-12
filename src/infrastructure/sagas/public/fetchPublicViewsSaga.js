// #region imports
import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
	FETCH_PUBLIC_VIEWS,
	fetchedPublicViewsFailure,
	fetchedPublicViewsSuccess
} from '../../actions';
// #endregion imports

function* fetchPublicViews() {
	try {
		const response = yield call(axios.get, `${API_BASE_URL}api/publicviewmanagement`);
		yield put(fetchedPublicViewsSuccess(response.data));
	} catch (e) {
		yield put(fetchedPublicViewsFailure());
	}
}

export default function* fetchPublicViewsSaga() {
	yield takeLatest(FETCH_PUBLIC_VIEWS, fetchPublicViews);
}
