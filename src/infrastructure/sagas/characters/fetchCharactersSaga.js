import { take, put, call } from 'redux-saga/effects';
import axios from 'axios';

import {
	FETCH_CHARACTERS,
	fetchedCharactersSuccess
} from '../../actions';

export default function* fetchNewsSaga() {
	yield take(FETCH_CHARACTERS);
	const response = yield call(axios.get, 'http://localhost:3001/characters');
	yield put(fetchedCharactersSuccess(response.data));
}
