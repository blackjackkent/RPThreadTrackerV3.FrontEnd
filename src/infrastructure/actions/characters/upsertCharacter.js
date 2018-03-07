export const UPSERT_CHARACTER = 'UPSERT_CHARACTER';
export function upsertCharacter(data) {
	return {
		type: UPSERT_CHARACTER,
		data
	};
}
