export const FETCHED_CHARACTERS_SUCCESS = 'FETCHED_CHARACTERS_SUCCESS';
export function fetchedCharactersSuccess(data) {
	return {
		type: FETCHED_CHARACTERS_SUCCESS,
		data
	};
}
