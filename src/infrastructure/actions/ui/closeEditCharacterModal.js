export const CLOSE_EDIT_CHARACTER_MODAL = 'CLOSE_EDIT_CHARACTER_MODAL';
export function closeEditCharacterModal(character) {
	return {
		type: CLOSE_EDIT_CHARACTER_MODAL,
		character
	};
}
