import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';

import {
	SUBMIT_CONTACT_FORM,
	submitContactFormSuccess,
	submitContactFormFailure
} from '../../actions';

function* submitContactForm(action) {
	try {
		yield call(axios.post, `${API_BASE_URL}api/contact`, action.data);
		yield put(submitContactFormSuccess());
	} catch (e) {
		yield put(submitContactFormFailure());
	}
}

export default function* submitContactFormSaga() {
	yield takeLatest(SUBMIT_CONTACT_FORM, submitContactForm);
}
