export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const TOGGLE_NEWS_ASIDE = 'TOGGLE_NEWS_ASIDE';
export const TOGGLE_HEADER_DROPDOWN = 'TOGGLE_HEADER_DROPDOWN';
export const TOGGLE_MOBILE_SIDEBAR = 'TOGGLE_MOBILE_SIDEBAR';

export function toggleSidebar() {
	return {
		type: TOGGLE_SIDEBAR
	};
}

export function toggleNewsAside() {
	return {
		type: TOGGLE_NEWS_ASIDE
	};
}

export function toggleHeaderDropdown() {
	return {
		type: TOGGLE_HEADER_DROPDOWN
	};
}

export function toggleMobileSidebar() {
	return {
		type: TOGGLE_MOBILE_SIDEBAR
	};
}
