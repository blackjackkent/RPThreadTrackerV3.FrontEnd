export const OPEN_EDIT_CHARACTER_MODAL = 'OPEN_EDIT_CHARACTER_MODAL';
export function openEditCharacterModal(character) {
	return {
		type: OPEN_EDIT_CHARACTER_MODAL,
		data: character
	};
}
