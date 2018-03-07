export const UNTRACK_CHARACTER_SUCCESS = 'UNTRACK_CHARACTER_SUCCESS';
export function untrackCharacterSuccess(data) {
	return {
		type: UNTRACK_CHARACTER_SUCCESS,
		data
	};
}
