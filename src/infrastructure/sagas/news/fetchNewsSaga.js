import { take, put, call, apply } from 'redux-saga/effects'
import axios from 'axios';

import {
	FETCH_NEWS,
	fetchedNewsSuccess
} from '../../actions'

export function* fetchNewsSaga() {
	const { id } = yield take(FETCH_NEWS);
	const response = yield call(axios.get, `http://localhost:3001/news`);
	yield put(fetchedNewsSuccess(response.data));
}
