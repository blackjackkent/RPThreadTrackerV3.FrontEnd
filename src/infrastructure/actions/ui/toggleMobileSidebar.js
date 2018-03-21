export const TOGGLE_MOBILE_SIDEBAR = 'TOGGLE_MOBILE_SIDEBAR';
export function toggleMobileSidebar(value) {
	return {
		type: TOGGLE_MOBILE_SIDEBAR,
		data: value
	};
}
