import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import cache from '../../cache';
import { navigation } from '../../../utility/history';

import {
	SUBMIT_USER_ACCOUNT_DELETION,
	submitUserAccountDeletionFailure,
	submitUserAccountDeletionSuccess
} from '../../actions';

function* submitUserAccountDeletion() {
	try {
		yield call(axios.delete, `${API_BASE_URL}api/user`);
		cache.clear();
		navigation.navigateTo('/login');
		yield put(submitUserAccountDeletionSuccess());
	} catch (e) {
		yield put(submitUserAccountDeletionFailure(e.response.data));
	}
}

export default function* submitUserAccountSaga() {
	yield takeEvery(SUBMIT_USER_ACCOUNT_DELETION, submitUserAccountDeletion);
}
