// #region imports
import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_USER, fetchedUserSuccess, fetchedUserFailure } from '../../actions';
// #endregion imports

function* fetchUser() {
	try {
		const response = yield call(axios.get, `${API_BASE_URL}api/user`);
		yield put(fetchedUserSuccess(response.data));
	} catch (e) {
		yield put(fetchedUserFailure());
	}
}

export default function* fetchUserSaga() {
	yield takeEvery(FETCH_USER, fetchUser);
}
