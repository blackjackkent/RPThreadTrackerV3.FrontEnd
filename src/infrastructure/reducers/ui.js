// #region imports
import {
	BULK_UNTRACK_THREADS,
	CLOSE_BULK_UNTRACK_THREADS_MODAL,
	CLOSE_UNTRACK_CHARACTER_MODAL,
	CLOSE_UNTRACK_THREAD_MODAL,
	CLOSE_UPSERT_CHARACTER_MODAL,
	CLOSE_UPSERT_PUBLIC_VIEW_MODAL,
	CLOSE_UPSERT_THREAD_MODAL,
	CLOSE_DELETE_ACCOUNT_CONFIRMATION_MODAL,
	OPEN_BULK_UNTRACK_THREADS_MODAL,
	OPEN_UNTRACK_CHARACTER_MODAL,
	OPEN_UNTRACK_THREAD_MODAL,
	OPEN_UPSERT_CHARACTER_MODAL,
	OPEN_UPSERT_PUBLIC_VIEW_MODAL,
	OPEN_UPSERT_THREAD_MODAL,
	OPEN_DELETE_ACCOUNT_CONFIRMATION_MODAL,
	SUBMIT_USER_LOGOUT,
	TOGGLE_HEADER_PROFILE_DROPDOWN,
	TOGGLE_HEADER_ADD_MENU_DROPDOWN,
	TOGGLE_MOBILE_SIDEBAR,
	TOGGLE_NEWS_ASIDE,
	LOAD_SIDEBAR_OPEN_SUCCESS,
	UNTRACK_CHARACTER,
	UNTRACK_THREAD,
	UPSERT_CHARACTER,
	UPSERT_PUBLIC_VIEW,
	UPSERT_THREAD,
	SET_MAINTENANCE_MODE_ON,
	OPEN_DELETE_PUBLIC_VIEW_MODAL,
	CLOSE_DELETE_PUBLIC_VIEW_MODAL,
	DELETE_PUBLIC_VIEW,
	OPEN_BULK_UPDATE_TAG_MODAL,
	CLOSE_BULK_UPDATE_TAG_MODAL,
	BULK_UPDATE_TAG,
	OPEN_BULK_DELETE_TAG_MODAL,
	CLOSE_BULK_DELETE_TAG_MODAL,
	BULK_DELETE_TAG
} from '../actions';
// #endregion imports

const defaultState = {
	isNewsAsideOpen: false,
	isSidebarOpen: true,
	isHeaderProfileDropdownOpen: false,
	isHeaderAddMenuDropdownOpen: false,
	isMobileSidebarOpen: false,
	isMaintenanceMode: false,
	isUpsertThreadModalOpen: false,
	isUpsertCharacterModalOpen: false,
	isBulkUntrackThreadsModalOpen: false,
	isUntrackThreadModalOpen: false,
	isUntrackCharacterModalOpen: false,
	isUpsertPublicViewModalOpen: false,
	isDeletePublicViewModalOpen: false,
	isBulkUpdateTagModalOpen: false,
	isBulkDeleteTagModalOpen: false,
	isDeleteAccountConfirmationModalOpen: false
};

function ui(state = defaultState, action) {
	switch (action.type) {
		case LOAD_SIDEBAR_OPEN_SUCCESS:
			return Object.assign({}, state, {
				isSidebarOpen: action.data
			});
		case TOGGLE_MOBILE_SIDEBAR:
			return Object.assign({}, state, {
				isMobileSidebarOpen: action.data
			});
		case TOGGLE_NEWS_ASIDE:
			return Object.assign({}, state, {
				isNewsAsideOpen: action.data
			});
		case TOGGLE_HEADER_PROFILE_DROPDOWN:
			return Object.assign({}, state, {
				isHeaderProfileDropdownOpen: action.data
			});
		case TOGGLE_HEADER_ADD_MENU_DROPDOWN:
			return Object.assign({}, state, {
				isHeaderAddMenuDropdownOpen: action.data
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
		case OPEN_UPSERT_PUBLIC_VIEW_MODAL:
			return Object.assign({}, state, {
				isUpsertPublicViewModalOpen: true
			});
		case CLOSE_UPSERT_PUBLIC_VIEW_MODAL:
		case UPSERT_PUBLIC_VIEW:
			return Object.assign({}, state, {
				isUpsertPublicViewModalOpen: false
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
		case OPEN_DELETE_PUBLIC_VIEW_MODAL:
			return Object.assign({}, state, {
				isDeletePublicViewModalOpen: true
			});
		case CLOSE_DELETE_PUBLIC_VIEW_MODAL:
		case DELETE_PUBLIC_VIEW:
			return Object.assign({}, state, {
				isDeletePublicViewModalOpen: false
			});
		case OPEN_DELETE_ACCOUNT_CONFIRMATION_MODAL:
			return Object.assign({}, state, {
				isDeleteAccountConfirmationModalOpen: true
			});
		case CLOSE_DELETE_ACCOUNT_CONFIRMATION_MODAL:
			return Object.assign({}, state, {
				isDeleteAccountConfirmationModalOpen: false
			});
		case OPEN_BULK_UPDATE_TAG_MODAL:
			return Object.assign({}, state, {
				isBulkUpdateTagModalOpen: true
			});
		case CLOSE_BULK_UPDATE_TAG_MODAL:
		case BULK_UPDATE_TAG:
			return Object.assign({}, state, {
				isBulkUpdateTagModalOpen: false
			});
		case OPEN_BULK_DELETE_TAG_MODAL:
			return Object.assign({}, state, {
				isBulkDeleteTagModalOpen: true
			});
		case CLOSE_BULK_DELETE_TAG_MODAL:
		case BULK_DELETE_TAG:
			return Object.assign({}, state, {
				isBulkDeleteTagModalOpen: false
			});
		case SET_MAINTENANCE_MODE_ON:
			return Object.assign({}, state, {
				isMaintenanceMode: true
			});
		case SUBMIT_USER_LOGOUT:
			return defaultState;
		default:
			return state;
	}
}

export default ui;
