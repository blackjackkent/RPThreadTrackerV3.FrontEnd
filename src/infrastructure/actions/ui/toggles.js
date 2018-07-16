import analytics from '../../constants/analytics';

export const TOGGLE_HEADER_PROFILE_DROPDOWN = 'TOGGLE_HEADER_PROFILE_DROPDOWN';
export function toggleHeaderProfileDropdown(value) {
	return {
		type: TOGGLE_HEADER_PROFILE_DROPDOWN,
		data: value,
		analytics: {
			func: analytics.funcs.EVENT,
			event: {
				category: analytics.categories.UI,
				action: 'Toggled header profile dropdown'
			}
		}
	};
}
export const TOGGLE_HEADER_ADD_MENU_DROPDOWN = 'TOGGLE_HEADER_ADD_MENU_DROPDOWN';
export function toggleHeaderAddMenuDropdown(value) {
	return {
		type: TOGGLE_HEADER_ADD_MENU_DROPDOWN,
		data: value,
		analytics: {
			func: analytics.funcs.EVENT,
			event: {
				category: analytics.categories.UI,
				action: 'Toggled header add menu dropdown'
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
