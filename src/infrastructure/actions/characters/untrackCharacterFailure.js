export const UNTRACK_CHARACTER_FAILURE = 'UNTRACK_CHARACTER_FAILURE';
export function untrackCharacterFailure(data) {
	return {
		type: UNTRACK_CHARACTER_FAILURE,
		data
	};
}
