import { takeEvery } from 'redux-saga/effects';
import UserApi from '../../api/UserApi';

export function* updateUserSaga(action) {
	console.log(action);
	yield null;
}

export function* watchUpdateUserSaga() {
	yield takeEvery('UPDATE_USER', updateUserSaga);
}
