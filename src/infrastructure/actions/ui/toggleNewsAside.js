import analytics from '../../constants/analytics';

export const TOGGLE_NEWS_ASIDE = 'TOGGLE_NEWS_ASIDE';
export function toggleNewsAside(value) {
	return {
		type: TOGGLE_NEWS_ASIDE,
		data: value,
		analytics: {
			func: analytics.funcs.EVENT,
			event: {
				category: analytics.categories.UI,
				action: 'Toggled news aside'
			}
		}
	};
}
