export const CLOSE_UPSERT_CHARACTER_MODAL = 'CLOSE_UPSERT_CHARACTER_MODAL';
export function closeUpsertCharacterModal(character) {
	return {
		type: CLOSE_UPSERT_CHARACTER_MODAL,
		character
	};
}
