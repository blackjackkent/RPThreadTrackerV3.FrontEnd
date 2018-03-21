export const TOGGLE_NEWS_ASIDE = 'TOGGLE_NEWS_ASIDE';
export function toggleNewsAside(value) {
	return {
		type: TOGGLE_NEWS_ASIDE,
		data: value
	};
}
