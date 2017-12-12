import { take, put, call } from 'redux-saga/effects';
import axios from 'axios';

import {
	FETCH_TAGS,
	fetchedTagsSuccess
} from '../../actions';

export default function* fetchTagsSaga() {
	yield take(FETCH_TAGS);
	const response = yield call(axios.get, 'http://localhost:3001/tags');
	yield put(fetchedTagsSuccess(response.data));
}
