import { take, put, call } from 'redux-saga/effects';
import axios from 'axios';

import {
	FETCH_NEWS,
	fetchedNewsSuccess
} from '../../actions';

export default function* fetchNewsSaga() {
	yield take(FETCH_NEWS);
	const response = yield call(axios.get, 'http://localhost:3001/news');
	yield put(fetchedNewsSuccess(response.data));
}
