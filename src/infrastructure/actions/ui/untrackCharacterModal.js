export const CLOSE_UNTRACK_CHARACTER_MODAL = 'CLOSE_UNTRACK_CHARACTER_MODAL';
export function closeUntrackCharacterModal() {
	return {
		type: CLOSE_UNTRACK_CHARACTER_MODAL
	};
}
export const OPEN_UNTRACK_CHARACTER_MODAL = 'OPEN_UNTRACK_CHARACTER_MODAL';
export function openUntrackCharacterModal(data) {
	return {
		type: OPEN_UNTRACK_CHARACTER_MODAL,
		data
	};
}
