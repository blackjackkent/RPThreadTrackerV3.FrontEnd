// #region imports
import { takeEvery, put, call, all } from 'redux-saga/effects';
import axios from 'axios';
import {
	UNTRACK_CHARACTER,
	untrackCharacterSuccess,
	untrackCharacterFailure,
	fetchCharacters
} from '../../actions';
// #endregion imports

function* untrackCharacter(action) {
	try {
		const character = action.data;
		yield call(axios.delete, `${API_BASE_URL}api/character/${character.characterId}`);
		yield all([
			put(untrackCharacterSuccess()),
			put(fetchCharacters())
		]);
	} catch (e) {
		yield put(untrackCharacterFailure());
	}
}

export default function* untrackCharacterSaga() {
	yield takeEvery(UNTRACK_CHARACTER, untrackCharacter);
}
