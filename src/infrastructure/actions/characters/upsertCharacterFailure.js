export const UPSERT_CHARACTER_FAILURE = 'UPSERT_CHARACTER_FAILURE';
export function upsertCharacterFailure(data) {
	return {
		type: UPSERT_CHARACTER_FAILURE,
		data
	};
}
