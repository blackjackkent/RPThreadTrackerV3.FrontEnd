export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export function fetchCharacters() {
	return {
		type: FETCH_CHARACTERS
	};
}
export const FETCHED_CHARACTERS_FAILURE = 'FETCHED_CHARACTERS_FAILURE';
export function fetchedCharactersFailure() {
	return {
		type: FETCHED_CHARACTERS_FAILURE
	};
}
export const FETCHED_CHARACTERS_SUCCESS = 'FETCHED_CHARACTERS_SUCCESS';
export function fetchedCharactersSuccess(data) {
	return {
		type: FETCHED_CHARACTERS_SUCCESS,
		data
	};
}
