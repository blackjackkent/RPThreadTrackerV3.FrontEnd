import { takeEvery, put, call, all } from 'redux-saga/effects';
import axios from 'axios';
import cache from '../../cache';

import {
	UPSERT_CHARACTER,
	upsertCharacterFailure,
	upsertCharacterSuccess,
	fetchCharacters
} from '../../actions';

function* updateCharacter(character) {
	try {
		yield call(axios.put, `${API_BASE_URL}api/character/${character.characterId}`, character);
		cache.clearKey('characters');
		yield all([
			put(upsertCharacterSuccess(character)),
			put(fetchCharacters())
		]);
	} catch (e) {
		yield put(upsertCharacterFailure());
	}
}

function* insertCharacter(character) {
	try {
		yield call(axios.post, `${API_BASE_URL}api/character`, character);
		cache.clearKey('characters');
		yield all([
			put(upsertCharacterSuccess(character)),
			put(fetchCharacters())
		]);
	} catch (e) {
		yield put(upsertCharacterFailure());
	}
}

function* upsertCharacter(action) {
	const character = action.data;
	if (character && character.characterId) {
		yield call(updateCharacter, character);
	} else {
		yield call(insertCharacter, character);
	}
}

export default function* upsertCharacterSaga() {
	yield takeEvery(UPSERT_CHARACTER, upsertCharacter);
}
