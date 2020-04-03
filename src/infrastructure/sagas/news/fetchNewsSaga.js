import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';

import { FETCH_NEWS, fetchedNewsSuccess } from '../../actions';

function* fetchNews() {
	const response = yield call(axios.get, `${TUMBLR_CLIENT_BASE_URL}api/news`);
	yield put(fetchedNewsSuccess(response.data));
}

export default function* fetchNewsSaga() {
	yield takeLatest(FETCH_NEWS, fetchNews);
}
