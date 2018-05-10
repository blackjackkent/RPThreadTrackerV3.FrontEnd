import analytics from '../../constants/analytics';

export const UNTRACK_CHARACTER = 'UNTRACK_CHARACTER';
export function untrackCharacter(data) {
	return {
		type: UNTRACK_CHARACTER,
		data,
		analytics: {
			func: analytics.funcs.EVENT,
			event: {
				category: analytics.categories.CHARACTER,
				action: 'Untracked character'
			}
		}
	};
}
export const UNTRACK_CHARACTER_FAILURE = 'UNTRACK_CHARACTER_FAILURE';
export function untrackCharacterFailure(data) {
	return {
		type: UNTRACK_CHARACTER_FAILURE,
		data
	};
}
export const UNTRACK_CHARACTER_SUCCESS = 'UNTRACK_CHARACTER_SUCCESS';
export function untrackCharacterSuccess(data) {
	return {
		type: UNTRACK_CHARACTER_SUCCESS,
		data
	};
}

