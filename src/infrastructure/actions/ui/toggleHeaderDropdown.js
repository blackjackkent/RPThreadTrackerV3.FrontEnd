export const TOGGLE_HEADER_DROPDOWN = 'TOGGLE_HEADER_DROPDOWN';
export function toggleHeaderDropdown(value) {
	return {
		type: TOGGLE_HEADER_DROPDOWN,
		data: value
	};
}
