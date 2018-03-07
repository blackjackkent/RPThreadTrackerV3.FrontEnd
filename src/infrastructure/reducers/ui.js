import {
	BULK_UNTRACK_THREADS,
	CLOSE_BULK_UNTRACK_THREADS_MODAL,
	CLOSE_UNTRACK_CHARACTER_MODAL,
	CLOSE_UNTRACK_THREAD_MODAL,
	CLOSE_UPSERT_CHARACTER_MODAL,
	CLOSE_UPSERT_THREAD_MODAL,
	OPEN_BULK_UNTRACK_THREADS_MODAL,
	OPEN_UNTRACK_CHARACTER_MODAL,
	OPEN_UNTRACK_THREAD_MODAL,
	OPEN_UPSERT_CHARACTER_MODAL,
	OPEN_UPSERT_THREAD_MODAL,
	SET_ACTIVE_HELP_TAB,
	SET_ACTIVE_SETTINGS_TAB,
	SET_ACTIVE_TOOLS_TAB,
	SUBMIT_USER_LOGOUT,
	TOGGLE_HEADER_DROPDOWN,
	TOGGLE_IS_THREAD_FILTER_CARD_HIDDEN,
	TOGGLE_MOBILE_SIDEBAR,
	TOGGLE_NEWS_ASIDE,
	TOGGLE_SIDEBAR,
	UNTRACK_CHARACTER,
	UNTRACK_THREAD,
	UPSERT_CHARACTER,
	UPSERT_THREAD
} from '../actions';

const defaultState = {
	isNewsAsideOpen: false,
	isSidebarOpen: true,
	isHeaderDropdownOpen: false,
	isMobileSidebarOpen: false,
	isMaintenanceMode: false,
	isThreadFilterCardHidden: true,
	isUpsertThreadModalOpen: false,
	isUpsertCharacterModalOpen: false,
	isBulkUntrackThreadsModalOpen: false,
	isUntrackThreadModalOpen: false,
	isUntrackCharacterModalOpen: false,
	activeHelpTab: 'about',
	activeSettingsTab: 'change-password',
	activeToolsTab: 'export-threads'
};

function ui(state = defaultState, action) {
	switch (action.type) {
		case TOGGLE_SIDEBAR:
			return Object.assign({}, state, {
				isSidebarOpen: !state.isSidebarOpen
			});
		case TOGGLE_MOBILE_SIDEBAR:
			return Object.assign({}, state, {
				isMobileSidebarOpen: !state.isMobileSidebarOpen
			});
		case TOGGLE_NEWS_ASIDE:
			return Object.assign({}, state, {
				isNewsAsideOpen: !state.isNewsAsideOpen
			});
		case TOGGLE_HEADER_DROPDOWN:
			return Object.assign({}, state, {
				isHeaderDropdownOpen: !state.isHeaderDropdownOpen
			});
		case TOGGLE_IS_THREAD_FILTER_CARD_HIDDEN:
			return Object.assign({}, state, {
				isThreadFilterCardHidden: !state.isThreadFilterCardHidden
			});
		case OPEN_UPSERT_CHARACTER_MODAL:
			return Object.assign({}, state, {
				isUpsertCharacterModalOpen: true
			});
		case CLOSE_UPSERT_CHARACTER_MODAL:
		case UPSERT_CHARACTER:
			return Object.assign({}, state, {
				isUpsertCharacterModalOpen: false
			});
		case OPEN_UPSERT_THREAD_MODAL:
			return Object.assign({}, state, {
				isUpsertThreadModalOpen: true
			});
		case CLOSE_UPSERT_THREAD_MODAL:
		case UPSERT_THREAD:
			return Object.assign({}, state, {
				isUpsertThreadModalOpen: false
			});
		case OPEN_UNTRACK_THREAD_MODAL:
			return Object.assign({}, state, {
				isUntrackThreadModalOpen: true
			});
		case CLOSE_UNTRACK_THREAD_MODAL:
		case UNTRACK_THREAD:
			return Object.assign({}, state, {
				isUntrackThreadModalOpen: false
			});
		case OPEN_BULK_UNTRACK_THREADS_MODAL:
			return Object.assign({}, state, {
				isBulkUntrackThreadsModalOpen: true
			});
		case CLOSE_BULK_UNTRACK_THREADS_MODAL:
		case BULK_UNTRACK_THREADS:
			return Object.assign({}, state, {
				isBulkUntrackThreadsModalOpen: false
			});
		case OPEN_UNTRACK_CHARACTER_MODAL:
			return Object.assign({}, state, {
				isUntrackCharacterModalOpen: true
			});
		case CLOSE_UNTRACK_CHARACTER_MODAL:
		case UNTRACK_CHARACTER:
			return Object.assign({}, state, {
				isUntrackCharacterModalOpen: false
			});
		case SET_ACTIVE_HELP_TAB:
			return Object.assign({}, state, {
				activeHelpTab: action.data
			});
		case SET_ACTIVE_SETTINGS_TAB:
			return Object.assign({}, state, {
				activeSettingsTab: action.data
			});
		case SET_ACTIVE_TOOLS_TAB:
			return Object.assign({}, state, {
				activeToolsTab: action.data
			});
		case SUBMIT_USER_LOGOUT:
			return defaultState;
		default:
			return state;
	}
}

export default ui;
