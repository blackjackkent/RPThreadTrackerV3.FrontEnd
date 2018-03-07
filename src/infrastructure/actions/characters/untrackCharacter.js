export const UNTRACK_CHARACTER = 'UNTRACK_CHARACTER';
export function untrackCharacter(data) {
	return {
		type: UNTRACK_CHARACTER,
		data
	};
}
