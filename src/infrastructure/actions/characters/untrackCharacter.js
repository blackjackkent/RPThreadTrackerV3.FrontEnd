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
