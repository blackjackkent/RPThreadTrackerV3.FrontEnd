import { fromJS } from 'immutable'
// TODO... finalize value list
export const initialState = fromJS({
	currentUser: null,
	placeholder: 'test',
	ui: {
		isNewsAsideOpen: false,
		isSidebarOpen: true,
		isHeaderDropdownOpen: false,
		isMobileSidebarOpen: true
	}
});
