import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import cache from '../../cache';

import {
	FETCH_CHARACTERS,
	fetchedCharactersSuccess,
	fetchedCharactersFailure
} from '../../actions';

function* fetchCharacters() {
	try {
		const characters = cache.get('characters');
		if (characters) {
			yield put(fetchedCharactersSuccess(characters));
			return;
		}
		const response = yield call(axios.get, `${API_BASE_URL}api/character`);
		cache.set('characters', response.data);
		yield put(fetchedCharactersSuccess(response.data));
	} catch (e) {
		yield put(fetchedCharactersFailure());
	}
}

export default function* fetchCharactersSaga() {
	yield takeLatest(FETCH_CHARACTERS, fetchCharacters);
}
