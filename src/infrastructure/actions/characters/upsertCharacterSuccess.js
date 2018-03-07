export const UPSERT_CHARACTER_SUCCESS = 'UPSERT_CHARACTER_SUCCESS';
export function upsertCharacterSuccess(character) {
	return {
		type: UPSERT_CHARACTER_SUCCESS,
		data: character
	};
}
