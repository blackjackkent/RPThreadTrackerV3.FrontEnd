import ui from '../ui';
import * as actions from '../../actions';

const getState = (overrides) => ({
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
	useLightTheme: false,
	...overrides
});

describe('action handling', () => {
	it('should set initial state', () => {
		const result = ui(undefined, {});
		expect(result).toEqual(getState());
	});
	it('should handle LOAD_SIDEBAR_OPEN_SUCCESS', () => {
		const action = {
			type: actions.LOAD_SIDEBAR_OPEN_SUCCESS,
			data: true
		};
		const action2 = {
			type: actions.LOAD_SIDEBAR_OPEN_SUCCESS,
			data: false
		};
		const result = ui(getState(), action);
		const result2 = ui(getState(), action2);
		expect(result.isSidebarOpen).toBe(true);
		expect(result2.isSidebarOpen).toBe(false);
	});
	it('should handle TOGGLE_MOBILE_SIDEBAR', () => {
		const action = {
			type: actions.TOGGLE_MOBILE_SIDEBAR,
			data: true
		};
		const action2 = {
			type: actions.TOGGLE_MOBILE_SIDEBAR,
			data: false
		};
		const result = ui(getState(), action);
		const result2 = ui(getState(), action2);
		expect(result.isMobileSidebarOpen).toBe(true);
		expect(result2.isMobileSidebarOpen).toBe(false);
	});
	it('should handle TOGGLE_NEWS_ASIDE', () => {
		const action = {
			type: actions.TOGGLE_NEWS_ASIDE,
			data: true
		};
		const action2 = {
			type: actions.TOGGLE_NEWS_ASIDE,
			data: false
		};
		const result = ui(getState(), action);
		const result2 = ui(getState(), action2);
		expect(result.isNewsAsideOpen).toBe(true);
		expect(result2.isNewsAsideOpen).toBe(false);
	});
	it('should handle TOGGLE_HEADER_PROFILE_DROPDOWN', () => {
		const action = {
			type: actions.TOGGLE_HEADER_PROFILE_DROPDOWN,
			data: true
		};
		const action2 = {
			type: actions.TOGGLE_HEADER_PROFILE_DROPDOWN,
			data: false
		};
		const result = ui(getState(), action);
		const result2 = ui(getState(), action2);
		expect(result.isHeaderProfileDropdownOpen).toBe(true);
		expect(result2.isHeaderProfileDropdownOpen).toBe(false);
	});
	it('should handle TOGGLE_HEADER_ADD_MENU_DROPDOWN', () => {
		const action = {
			type: actions.TOGGLE_HEADER_ADD_MENU_DROPDOWN,
			data: true
		};
		const action2 = {
			type: actions.TOGGLE_HEADER_ADD_MENU_DROPDOWN,
			data: false
		};
		const result = ui(getState(), action);
		const result2 = ui(getState(), action2);
		expect(result.isHeaderAddMenuDropdownOpen).toBe(true);
		expect(result2.isHeaderAddMenuDropdownOpen).toBe(false);
	});
	it('should handle OPEN_UPSERT_CHARACTER_MODAL', () => {
		const action = {
			type: actions.OPEN_UPSERT_CHARACTER_MODAL
		};
		const result = ui(getState(), action);
		const result2 = ui(
			getState({
				isUpsertCharacterModalOpen: true
			}),
			action
		);
		expect(result.isUpsertCharacterModalOpen).toBe(true);
		expect(result2.isUpsertCharacterModalOpen).toBe(true);
	});
	it('should handle CLOSE_UPSERT_CHARACTER_MODAL', () => {
		const action = {
			type: actions.CLOSE_UPSERT_CHARACTER_MODAL
		};
		const result = ui(getState(), action);
		const result2 = ui(
			getState({
				isUpsertCharacterModalOpen: true
			}),
			action
		);
		expect(result.isUpsertCharacterModalOpen).toBe(false);
		expect(result2.isUpsertCharacterModalOpen).toBe(false);
	});
	it('should handle UPSERT_CHARACTER', () => {
		const action = {
			type: actions.UPSERT_CHARACTER
		};
		const result = ui(getState(), action);
		const result2 = ui(
			getState({
				isUpsertCharacterModalOpen: true
			}),
			action
		);
		expect(result.isUpsertCharacterModalOpen).toBe(false);
		expect(result2.isUpsertCharacterModalOpen).toBe(false);
	});
	it('should handle OPEN_UPSERT_PUBLIC_VIEW_MODAL', () => {
		const action = {
			type: actions.OPEN_UPSERT_PUBLIC_VIEW_MODAL
		};
		const result = ui(getState(), action);
		const result2 = ui(
			getState({
				isUpsertPublicViewModalOpen: true
			}),
			action
		);
		expect(result.isUpsertPublicViewModalOpen).toBe(true);
		expect(result2.isUpsertPublicViewModalOpen).toBe(true);
	});
	it('should handle CLOSE_UPSERT_PUBLIC_VIEW_MODAL', () => {
		const action = {
			type: actions.CLOSE_UPSERT_PUBLIC_VIEW_MODAL
		};
		const result = ui(getState(), action);
		const result2 = ui(
			getState({
				isUpsertPublicViewModalOpen: true
			}),
			action
		);
		expect(result.isUpsertPublicViewModalOpen).toBe(false);
		expect(result2.isUpsertPublicViewModalOpen).toBe(false);
	});
	it('should handle UPSERT_PUBLIC_VIEW', () => {
		const action = {
			type: actions.UPSERT_PUBLIC_VIEW
		};
		const result = ui(getState(), action);
		const result2 = ui(
			getState({
				isUpsertCharacterModalOpen: true
			}),
			action
		);
		expect(result.isUpsertPublicViewModalOpen).toBe(false);
		expect(result2.isUpsertPublicViewModalOpen).toBe(false);
	});
	it('should handle OPEN_UPSERT_THREAD_MODAL', () => {
		const action = {
			type: actions.OPEN_UPSERT_THREAD_MODAL
		};
		const result = ui(getState(), action);
		const result2 = ui(
			getState({
				isUpsertThreadModalOpen: true
			}),
			action
		);
		expect(result.isUpsertThreadModalOpen).toBe(true);
		expect(result2.isUpsertThreadModalOpen).toBe(true);
	});
	it('should handle CLOSE_UPSERT_THREAD_MODAL', () => {
		const action = {
			type: actions.CLOSE_UPSERT_THREAD_MODAL
		};
		const result = ui(getState(), action);
		const result2 = ui(
			getState({
				isUpsertThreadModalOpen: true
			}),
			action
		);
		expect(result.isUpsertThreadModalOpen).toBe(false);
		expect(result2.isUpsertThreadModalOpen).toBe(false);
	});
	it('should handle UPSERT_THREAD', () => {
		const action = {
			type: actions.UPSERT_THREAD
		};
		const result = ui(getState(), action);
		const result2 = ui(
			getState({
				isUpsertThreadModalOpen: true
			}),
			action
		);
		expect(result.isUpsertThreadModalOpen).toBe(false);
		expect(result2.isUpsertThreadModalOpen).toBe(false);
	});
	it('should handle OPEN_UNTRACK_THREAD_MODAL', () => {
		const action = {
			type: actions.OPEN_UNTRACK_THREAD_MODAL
		};
		const result = ui(getState(), action);
		const result2 = ui(
			getState({
				isUntrackThreadModalOpen: true
			}),
			action
		);
		expect(result.isUntrackThreadModalOpen).toBe(true);
		expect(result2.isUntrackThreadModalOpen).toBe(true);
	});
	it('should handle CLOSE_UNTRACK_THREAD_MODAL', () => {
		const action = {
			type: actions.CLOSE_UNTRACK_THREAD_MODAL
		};
		const result = ui(getState(), action);
		const result2 = ui(
			getState({
				isUntrackThreadModalOpen: true
			}),
			action
		);
		expect(result.isUntrackThreadModalOpen).toBe(false);
		expect(result2.isUntrackThreadModalOpen).toBe(false);
	});
	it('should handle UNTRACK_THREAD', () => {
		const action = {
			type: actions.UNTRACK_THREAD
		};
		const result = ui(getState(), action);
		const result2 = ui(
			getState({
				isUntrackThreadModalOpen: true
			}),
			action
		);
		expect(result.isUntrackThreadModalOpen).toBe(false);
		expect(result2.isUntrackThreadModalOpen).toBe(false);
	});
	it('should handle OPEN_BULK_UNTRACK_THREADS_MODAL', () => {
		const action = {
			type: actions.OPEN_BULK_UNTRACK_THREADS_MODAL
		};
		const result = ui(getState(), action);
		const result2 = ui(
			getState({
				isBulkUntrackThreadsModalOpen: true
			}),
			action
		);
		expect(result.isBulkUntrackThreadsModalOpen).toBe(true);
		expect(result2.isBulkUntrackThreadsModalOpen).toBe(true);
	});
	it('should handle CLOSE_BULK_UNTRACK_THREADS_MODAL', () => {
		const action = {
			type: actions.CLOSE_BULK_UNTRACK_THREADS_MODAL
		};
		const result = ui(getState(), action);
		const result2 = ui(
			getState({
				isBulkUntrackThreadsModalOpen: true
			}),
			action
		);
		expect(result.isBulkUntrackThreadsModalOpen).toBe(false);
		expect(result2.isBulkUntrackThreadsModalOpen).toBe(false);
	});
	it('should handle BULK_UNTRACK_THREADS', () => {
		const action = {
			type: actions.BULK_UNTRACK_THREADS
		};
		const result = ui(getState(), action);
		const result2 = ui(
			getState({
				isBulkUntrackThreadsModalOpen: true
			}),
			action
		);
		expect(result.isBulkUntrackThreadsModalOpen).toBe(false);
		expect(result2.isBulkUntrackThreadsModalOpen).toBe(false);
	});
	it('should handle OPEN_UNTRACK_CHARACTER_MODAL', () => {
		const action = {
			type: actions.OPEN_UNTRACK_CHARACTER_MODAL
		};
		const result = ui(getState(), action);
		const result2 = ui(
			getState({
				isUntrackCharacterModalOpen: true
			}),
			action
		);
		expect(result.isUntrackCharacterModalOpen).toBe(true);
		expect(result2.isUntrackCharacterModalOpen).toBe(true);
	});
	it('should handle CLOSE_UNTRACK_CHARACTER_MODAL', () => {
		const action = {
			type: actions.CLOSE_UNTRACK_CHARACTER_MODAL
		};
		const result = ui(getState(), action);
		const result2 = ui(
			getState({
				isUntrackCharacterModalOpen: true
			}),
			action
		);
		expect(result.isUntrackCharacterModalOpen).toBe(false);
		expect(result2.isUntrackCharacterModalOpen).toBe(false);
	});
	it('should handle UNTRACK_CHARACTER', () => {
		const action = {
			type: actions.UNTRACK_CHARACTER
		};
		const result = ui(getState(), action);
		const result2 = ui(
			getState({
				isUntrackCharacterModalOpen: true
			}),
			action
		);
		expect(result.isUntrackCharacterModalOpen).toBe(false);
		expect(result2.isUntrackCharacterModalOpen).toBe(false);
	});
	it('should handle OPEN_DELETE_PUBLIC_VIEW_MODAL', () => {
		const action = {
			type: actions.OPEN_DELETE_PUBLIC_VIEW_MODAL
		};
		const result = ui(getState(), action);
		const result2 = ui(
			getState({
				isDeletePublicViewModalOpen: true
			}),
			action
		);
		expect(result.isDeletePublicViewModalOpen).toBe(true);
		expect(result2.isDeletePublicViewModalOpen).toBe(true);
	});
	it('should handle CLOSE_DELETE_PUBLIC_VIEW_MODAL', () => {
		const action = {
			type: actions.CLOSE_DELETE_PUBLIC_VIEW_MODAL
		};
		const result = ui(getState(), action);
		const result2 = ui(
			getState({
				isDeletePublicViewModalOpen: true
			}),
			action
		);
		expect(result.isDeletePublicViewModalOpen).toBe(false);
		expect(result2.isDeletePublicViewModalOpen).toBe(false);
	});
	it('should handle DELETE_PUBLIC_VIEW', () => {
		const action = {
			type: actions.DELETE_PUBLIC_VIEW
		};
		const result = ui(getState(), action);
		const result2 = ui(
			getState({
				isDeletePublicViewModalOpen: true
			}),
			action
		);
		expect(result.isDeletePublicViewModalOpen).toBe(false);
		expect(result2.isDeletePublicViewModalOpen).toBe(false);
	});
	it('should handle OPEN_BULK_UPDATE_TAG_MODAL', () => {
		const action = {
			type: actions.OPEN_BULK_UPDATE_TAG_MODAL
		};
		const result = ui(getState(), action);
		const result2 = ui(
			getState({
				isBulkUpdateTagModalOpen: true
			}),
			action
		);
		expect(result.isBulkUpdateTagModalOpen).toBe(true);
		expect(result2.isBulkUpdateTagModalOpen).toBe(true);
	});
	it('should handle CLOSE_BULK_UPDATE_TAG_MODAL', () => {
		const action = {
			type: actions.CLOSE_BULK_UPDATE_TAG_MODAL
		};
		const result = ui(getState(), action);
		const result2 = ui(
			getState({
				isBulkUpdateTagModalOpen: true
			}),
			action
		);
		expect(result.isBulkUpdateTagModalOpen).toBe(false);
		expect(result2.isBulkUpdateTagModalOpen).toBe(false);
	});
	it('should handle BULK_UPDATE_TAG', () => {
		const action = {
			type: actions.BULK_UPDATE_TAG
		};
		const result = ui(getState(), action);
		const result2 = ui(
			getState({
				isBulkUpdateTagModalOpen: true
			}),
			action
		);
		expect(result.isBulkUpdateTagModalOpen).toBe(false);
		expect(result2.isBulkUpdateTagModalOpen).toBe(false);
	});
	it('should handle OPEN_BULK_DELETE_TAG_MODAL', () => {
		const action = {
			type: actions.OPEN_BULK_DELETE_TAG_MODAL
		};
		const result = ui(getState(), action);
		const result2 = ui(
			getState({
				isBulkDeleteTagModalOpen: true
			}),
			action
		);
		expect(result.isBulkDeleteTagModalOpen).toBe(true);
		expect(result2.isBulkDeleteTagModalOpen).toBe(true);
	});
	it('should handle CLOSE_BULK_DELETE_TAG_MODAL', () => {
		const action = {
			type: actions.CLOSE_BULK_DELETE_TAG_MODAL
		};
		const result = ui(getState(), action);
		const result2 = ui(
			getState({
				isBulkDeleteTagModalOpen: true
			}),
			action
		);
		expect(result.isBulkDeleteTagModalOpen).toBe(false);
		expect(result2.isBulkDeleteTagModalOpen).toBe(false);
	});
	it('should handle BULK_DELETE_TAG', () => {
		const action = {
			type: actions.BULK_DELETE_TAG
		};
		const result = ui(getState(), action);
		const result2 = ui(
			getState({
				isBulkDeleteTagModalOpen: true
			}),
			action
		);
		expect(result.isBulkDeleteTagModalOpen).toBe(false);
		expect(result2.isBulkDeleteTagModalOpen).toBe(false);
	});
	it('should handle SET_MAINTENANCE_MODE_ON', () => {
		const action = {
			type: actions.SET_MAINTENANCE_MODE_ON
		};
		const result = ui(getState(), action);
		const result2 = ui(
			getState({
				isMaintenanceMode: true
			}),
			action
		);
		expect(result.isMaintenanceMode).toBe(true);
		expect(result2.isMaintenanceMode).toBe(true);
	});
	it('should handle LOAD_SITE_THEME_SUCCESS', () => {
		const action = {
			type: actions.LOAD_SITE_THEME_SUCCESS,
			data: true
		};
		const result = ui(getState(), action);
		expect(result.useLightTheme).toBe(true);
	});
	it('should handle SUBMIT_USER_LOGOUT', () => {
		const action = {
			type: actions.SUBMIT_USER_LOGOUT
		};
		const result = ui(
			getState({
				activeSettingsTab: 'test-tab-settings',
				isMaintenanceMode: true,
				isBulkUntrackThreadsModalOpen: true
			}),
			action
		);
		expect(result).toEqual(getState());
	});
});
