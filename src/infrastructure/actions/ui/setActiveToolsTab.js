export const SET_ACTIVE_TOOLS_TAB = 'SET_ACTIVE_TOOLS_TAB';
export function setActiveToolsTab(tab) {
	return {
		type: SET_ACTIVE_TOOLS_TAB,
		data: tab
	};
}
