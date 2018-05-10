import analytics from '../../constants/analytics';

export const TOGGLE_HEADER_DROPDOWN = 'TOGGLE_HEADER_DROPDOWN';
export function toggleHeaderDropdown(value) {
	return {
		type: TOGGLE_HEADER_DROPDOWN,
		data: value,
		analytics: {
			func: analytics.funcs.EVENT,
			event: {
				category: analytics.categories.UI,
				action: 'Toggled header dropdown'
			}
		}
	};
}
export const TOGGLE_MOBILE_SIDEBAR = 'TOGGLE_MOBILE_SIDEBAR';
export function toggleMobileSidebar(value) {
	return {
		type: TOGGLE_MOBILE_SIDEBAR,
		data: value,
		analytics: {
			func: analytics.funcs.EVENT,
			event: {
				category: analytics.categories.UI,
				action: 'Toggled mobile sidebar'
			}
		}
	};
}
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
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export function toggleSidebar(value) {
	return {
		type: TOGGLE_SIDEBAR,
		data: value,
		analytics: {
			func: analytics.funcs.EVENT,
			event: {
				category: analytics.categories.UI,
				action: 'Toggled sidebar'
			}
		}
	};
}
