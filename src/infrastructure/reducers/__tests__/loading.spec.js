import loading from '../loading';
import * as actions from '../../actions';

const getState = (overrides) => ({
	activeThreadsLoading: false,
	archivedThreadsLoading: false,
	bulkUntrackThreadLoading: false,
	bulkUpsertThreadsLoading: false,
	bulkUpdateTagLoading: false,
	bulkDeleteTagLoading: false,
	changeAccountInfoLoading: false,
	changePasswordLoading: false,
	charactersLoading: false,
	deletePublicViewLoading: false,
	exportThreadsLoading: false,
	forgotPasswordLoading: false,
	publicViewsLoading: false,
	publicThreadsLoading: false,
	registrationLoading: false,
	resetPasswordLoading: false,
	untrackCharactersLoading: false,
	untrackThreadLoading: false,
	upsertCharactersLoading: false,
	upsertPublicViewLoading: false,
	upsertThreadLoading: false,
	...overrides
});

describe('action handling', () => {
	it('should set initial state', () => {
		const result = loading(undefined, {});
		expect(result).toEqual(getState());
	});
	describe('active threads', () => {
		it('should handle FETCH_ACTIVE_THREADS', () => {
			const action = {
				type: actions.FETCH_ACTIVE_THREADS
			};
			const result = loading(getState(), action);
			expect(result.activeThreadsLoading).toBe(true);
		});
		it('should handle FETCHED_ACTIVE_THREADS_FAILURE', () => {
			const initialState = getState({
				activeThreadsLoading: true
			});
			const action = {
				type: actions.FETCHED_ACTIVE_THREADS_FAILURE
			};
			const result = loading(initialState, action);
			expect(result.activeThreadsLoading).toBe(false);
		});
		it('should handle FETCHED_ACTIVE_THREADS_STATUS_SUCCESS', () => {
			const initialState = getState({
				activeThreadsLoading: true
			});
			const action = {
				type: actions.FETCHED_ACTIVE_THREADS_STATUS_SUCCESS
			};
			const result = loading(initialState, action);
			expect(result.activeThreadsLoading).toBe(false);
		});
		it('should handle FETCHED_ACTIVE_THREADS_STATUS_FAILURE', () => {
			const initialState = getState({
				activeThreadsLoading: true
			});
			const action = {
				type: actions.FETCHED_ACTIVE_THREADS_STATUS_FAILURE
			};
			const result = loading(initialState, action);
			expect(result.activeThreadsLoading).toBe(false);
		});
	});
	describe('archived threads', () => {
		it('should handle FETCH_ARCHIVED_THREADS', () => {
			const action = {
				type: actions.FETCH_ARCHIVED_THREADS
			};
			const result = loading(getState(), action);
			expect(result.archivedThreadsLoading).toBe(true);
		});
		it('should handle FETCHED_ARCHIVED_THREADS_FAILURE', () => {
			const initialState = getState({
				archivedThreadsLoading: true
			});
			const action = {
				type: actions.FETCHED_ARCHIVED_THREADS_FAILURE
			};
			const result = loading(initialState, action);
			expect(result.archivedThreadsLoading).toBe(false);
		});
		it('should handle FETCHED_ARCHIVED_THREADS_STATUS_SUCCESS', () => {
			const initialState = getState({
				activeThreadsLoading: true
			});
			const action = {
				type: actions.FETCHED_ARCHIVED_THREADS_STATUS_SUCCESS
			};
			const result = loading(initialState, action);
			expect(result.archivedThreadsLoading).toBe(false);
		});
		it('should handle FETCHED_ARCHIVED_THREADS_STATUS_FAILURE', () => {
			const initialState = getState({
				activeThreadsLoading: true
			});
			const action = {
				type: actions.FETCHED_ARCHIVED_THREADS_STATUS_FAILURE
			};
			const result = loading(initialState, action);
			expect(result.archivedThreadsLoading).toBe(false);
		});
	});
	describe('bulk untrack threads', () => {
		it('should handle BULK_UNTRACK_THREADS', () => {
			const action = {
				type: actions.BULK_UNTRACK_THREADS
			};
			const result = loading(getState(), action);
			expect(result.bulkUpsertThreadsLoading).toBe(true);
		});
		it('should handle BULK_UNTRACK_THREADS_FAILURE', () => {
			const initialState = getState({
				bulkUpsertThreadsLoading: true
			});
			const action = {
				type: actions.BULK_UNTRACK_THREADS_FAILURE
			};
			const result = loading(initialState, action);
			expect(result.bulkUpsertThreadsLoading).toBe(false);
		});
		it('should handle BULK_UNTRACK_THREADS_SUCCESS', () => {
			const initialState = getState({
				bulkUpsertThreadsLoading: true
			});
			const action = {
				type: actions.BULK_UNTRACK_THREADS_SUCCESS
			};
			const result = loading(initialState, action);
			expect(result.bulkUpsertThreadsLoading).toBe(false);
		});
	});
	describe('bulk update threads', () => {
		it('should handle BULK_UPDATE_THREADS', () => {
			const action = {
				type: actions.BULK_UPDATE_THREADS
			};
			const result = loading(getState(), action);
			expect(result.bulkUpsertThreadsLoading).toBe(true);
		});
		it('should handle BULK_UPDATE_THREADS_FAILURE', () => {
			const initialState = getState({
				bulkUpsertThreadsLoading: true
			});
			const action = {
				type: actions.BULK_UPDATE_THREADS_FAILURE
			};
			const result = loading(initialState, action);
			expect(result.bulkUpsertThreadsLoading).toBe(false);
		});
		it('should handle BULK_UPDATE_THREADS_SUCCESS', () => {
			const initialState = getState({
				bulkUpsertThreadsLoading: true
			});
			const action = {
				type: actions.BULK_UPDATE_THREADS_SUCCESS
			};
			const result = loading(initialState, action);
			expect(result.bulkUpsertThreadsLoading).toBe(false);
		});
	});
	describe('bulk update tag', () => {
		it('should handle BULK_UPDATE_TAG', () => {
			const action = {
				type: actions.BULK_UPDATE_TAG
			};
			const result = loading(getState(), action);
			expect(result.bulkUpdateTagLoading).toBe(true);
		});
		it('should handle BULK_UPDATE_TAG_FAILURE', () => {
			const initialState = getState({
				bulkUpdateTagLoading: true
			});
			const action = {
				type: actions.BULK_UPDATE_TAG_FAILURE
			};
			const result = loading(initialState, action);
			expect(result.bulkUpdateTagLoading).toBe(false);
		});
		it('should handle BULK_UPDATE_TAG_SUCCESS', () => {
			const initialState = getState({
				bulkUpdateTagLoading: true
			});
			const action = {
				type: actions.BULK_UPDATE_TAG_SUCCESS
			};
			const result = loading(initialState, action);
			expect(result.bulkUpdateTagLoading).toBe(false);
		});
	});
	describe('bulk delete tag', () => {
		it('should handle BULK_DELETE_TAG', () => {
			const action = {
				type: actions.BULK_DELETE_TAG
			};
			const result = loading(getState(), action);
			expect(result.bulkDeleteTagLoading).toBe(true);
		});
		it('should handle BULK_DELETE_TAG_FAILURE', () => {
			const initialState = getState({
				bulkDeleteTagLoading: true
			});
			const action = {
				type: actions.BULK_DELETE_TAG_FAILURE
			};
			const result = loading(initialState, action);
			expect(result.bulkDeleteTagLoading).toBe(false);
		});
		it('should handle BULK_DELETE_TAG_SUCCESS', () => {
			const initialState = getState({
				bulkDeleteTagLoading: true
			});
			const action = {
				type: actions.BULK_DELETE_TAG_SUCCESS
			};
			const result = loading(initialState, action);
			expect(result.bulkDeleteTagLoading).toBe(false);
		});
	});
	describe('change account info', () => {
		it('should handle SUBMIT_USER_ACCOUNT_INFO', () => {
			const action = {
				type: actions.SUBMIT_USER_ACCOUNT_INFO
			};
			const result = loading(getState(), action);
			expect(result.changeAccountInfoLoading).toBe(true);
		});
		it('should handle SUBMIT_USER_ACCOUNT_INFO_FAILURE', () => {
			const initialState = getState({
				changeAccountInfoLoading: true
			});
			const action = {
				type: actions.SUBMIT_USER_ACCOUNT_INFO_FAILURE
			};
			const result = loading(initialState, action);
			expect(result.changeAccountInfoLoading).toBe(false);
		});
		it('should handle SUBMIT_USER_ACCOUNT_INFO_SUCCESS', () => {
			const initialState = getState({
				changeAccountInfoLoading: true
			});
			const action = {
				type: actions.SUBMIT_USER_ACCOUNT_INFO_SUCCESS
			};
			const result = loading(initialState, action);
			expect(result.changeAccountInfoLoading).toBe(false);
		});
	});
	describe('change password', () => {
		it('should handle SUBMIT_USER_CHANGE_PASSWORD', () => {
			const action = {
				type: actions.SUBMIT_USER_CHANGE_PASSWORD
			};
			const result = loading(getState(), action);
			expect(result.changePasswordLoading).toBe(true);
		});
		it('should handle SUBMIT_USER_CHANGE_PASSWORD_FAILURE', () => {
			const initialState = getState({
				changePasswordLoading: true
			});
			const action = {
				type: actions.SUBMIT_USER_CHANGE_PASSWORD_FAILURE
			};
			const result = loading(initialState, action);
			expect(result.changePasswordLoading).toBe(false);
		});
		it('should handle SUBMIT_USER_CHANGE_PASSWORD_SUCCESS', () => {
			const initialState = getState({
				changePasswordLoading: true
			});
			const action = {
				type: actions.SUBMIT_USER_CHANGE_PASSWORD_SUCCESS
			};
			const result = loading(initialState, action);
			expect(result.changePasswordLoading).toBe(false);
		});
	});
	describe('characters', () => {
		it('should handle FETCH_CHARACTERS', () => {
			const action = {
				type: actions.FETCH_CHARACTERS
			};
			const result = loading(getState(), action);
			expect(result.charactersLoading).toBe(true);
		});
		it('should handle FETCHED_CHARACTERS_FAILURE', () => {
			const initialState = getState({
				charactersLoading: true
			});
			const action = {
				type: actions.FETCHED_CHARACTERS_FAILURE
			};
			const result = loading(initialState, action);
			expect(result.charactersLoading).toBe(false);
		});
		it('should handle FETCHED_CHARACTERS_FAILURE', () => {
			const initialState = getState({
				charactersLoading: true
			});
			const action = {
				type: actions.FETCHED_CHARACTERS_FAILURE
			};
			const result = loading(initialState, action);
			expect(result.charactersLoading).toBe(false);
		});
	});
	describe('delete public view', () => {
		it('should handle DELETE_PUBLIC_VIEW', () => {
			const action = {
				type: actions.DELETE_PUBLIC_VIEW
			};
			const result = loading(getState(), action);
			expect(result.deletePublicViewLoading).toBe(true);
		});
		it('should handle DELETE_PUBLIC_VIEW_FAILURE', () => {
			const initialState = getState({
				deletePublicViewLoading: true
			});
			const action = {
				type: actions.DELETE_PUBLIC_VIEW_FAILURE
			};
			const result = loading(initialState, action);
			expect(result.deletePublicViewLoading).toBe(false);
		});
		it('should handle DELETE_PUBLIC_VIEW_SUCCESS', () => {
			const initialState = getState({
				deletePublicViewLoading: true
			});
			const action = {
				type: actions.DELETE_PUBLIC_VIEW_SUCCESS
			};
			const result = loading(initialState, action);
			expect(result.deletePublicViewLoading).toBe(false);
		});
	});
	describe('delete public view', () => {
		it('should handle DELETE_PUBLIC_VIEW', () => {
			const action = {
				type: actions.DELETE_PUBLIC_VIEW
			};
			const result = loading(getState(), action);
			expect(result.deletePublicViewLoading).toBe(true);
		});
		it('should handle DELETE_PUBLIC_VIEW_FAILURE', () => {
			const initialState = getState({
				deletePublicViewLoading: true
			});
			const action = {
				type: actions.DELETE_PUBLIC_VIEW_FAILURE
			};
			const result = loading(initialState, action);
			expect(result.deletePublicViewLoading).toBe(false);
		});
		it('should handle DELETE_PUBLIC_VIEW_SUCCESS', () => {
			const initialState = getState({
				deletePublicViewLoading: true
			});
			const action = {
				type: actions.DELETE_PUBLIC_VIEW_SUCCESS
			};
			const result = loading(initialState, action);
			expect(result.deletePublicViewLoading).toBe(false);
		});
	});
	describe('export threads', () => {
		it('should handle EXPORT_THREADS', () => {
			const action = {
				type: actions.EXPORT_THREADS
			};
			const result = loading(getState(), action);
			expect(result.exportThreadsLoading).toBe(true);
		});
		it('should handle EXPORT_THREADS_FAILURE', () => {
			const initialState = getState({
				exportThreadsLoading: true
			});
			const action = {
				type: actions.EXPORT_THREADS_FAILURE
			};
			const result = loading(initialState, action);
			expect(result.exportThreadsLoading).toBe(false);
		});
		it('should handle EXPORT_THREADS_SUCCESS', () => {
			const initialState = getState({
				exportThreadsLoading: true
			});
			const action = {
				type: actions.EXPORT_THREADS_SUCCESS
			};
			const result = loading(initialState, action);
			expect(result.exportThreadsLoading).toBe(false);
		});
	});
	describe('forgot password', () => {
		it('should handle SUBMIT_USER_FORGOT_PASSWORD', () => {
			const action = {
				type: actions.SUBMIT_USER_FORGOT_PASSWORD
			};
			const result = loading(getState(), action);
			expect(result.forgotPasswordLoading).toBe(true);
		});
		it('should handle SUBMIT_USER_FORGOT_PASSWORD_FAILURE', () => {
			const initialState = getState({
				forgotPasswordLoading: true
			});
			const action = {
				type: actions.SUBMIT_USER_FORGOT_PASSWORD_FAILURE
			};
			const result = loading(initialState, action);
			expect(result.forgotPasswordLoading).toBe(false);
		});
		it('should handle SUBMIT_USER_FORGOT_PASSWORD_SUCCESS', () => {
			const initialState = getState({
				forgotPasswordLoading: true
			});
			const action = {
				type: actions.SUBMIT_USER_FORGOT_PASSWORD_SUCCESS
			};
			const result = loading(initialState, action);
			expect(result.forgotPasswordLoading).toBe(false);
		});
	});
	describe('public views', () => {
		it('should handle FETCH_PUBLIC_VIEWS', () => {
			const action = {
				type: actions.FETCH_PUBLIC_VIEWS
			};
			const result = loading(getState(), action);
			expect(result.publicViewsLoading).toBe(true);
		});
		it('should handle FETCHED_PUBLIC_VIEWS_FAILURE', () => {
			const initialState = getState({
				publicViewsLoading: true
			});
			const action = {
				type: actions.FETCHED_PUBLIC_VIEWS_FAILURE
			};
			const result = loading(initialState, action);
			expect(result.publicViewsLoading).toBe(false);
		});
		it('should handle FETCHED_PUBLIC_VIEWS_SUCCESS', () => {
			const initialState = getState({
				publicViewsLoading: true
			});
			const action = {
				type: actions.FETCHED_PUBLIC_VIEWS_SUCCESS
			};
			const result = loading(initialState, action);
			expect(result.publicViewsLoading).toBe(false);
		});
	});
	describe('public threads', () => {
		it('should handle FETCH_PUBLIC_THREADS', () => {
			const action = {
				type: actions.FETCH_PUBLIC_THREADS
			};
			const result = loading(getState(), action);
			expect(result.publicThreadsLoading).toBe(true);
		});
		it('should handle FETCH_LEGACY_PUBLIC_THREADS', () => {
			const action = {
				type: actions.FETCH_LEGACY_PUBLIC_THREADS
			};
			const result = loading(getState(), action);
			expect(result.publicThreadsLoading).toBe(true);
		});
		it('should handle FETCHED_PUBLIC_THREADS_FAILURE', () => {
			const initialState = getState({
				publicThreadsLoading: true
			});
			const action = {
				type: actions.FETCHED_PUBLIC_THREADS_FAILURE
			};
			const result = loading(initialState, action);
			expect(result.publicThreadsLoading).toBe(false);
		});
		it('should handle FETCHED_PUBLIC_THREADS_STATUS_FAILURE', () => {
			const initialState = getState({
				publicThreadsLoading: true
			});
			const action = {
				type: actions.FETCHED_PUBLIC_THREADS_STATUS_FAILURE
			};
			const result = loading(initialState, action);
			expect(result.publicThreadsLoading).toBe(false);
		});
		it('should handle FETCHED_PUBLIC_THREADS_STATUS_SUCCESS', () => {
			const initialState = getState({
				publicThreadsLoading: true
			});
			const action = {
				type: actions.FETCHED_PUBLIC_THREADS_STATUS_SUCCESS
			};
			const result = loading(initialState, action);
			expect(result.publicThreadsLoading).toBe(false);
		});
	});
	describe('registration', () => {
		it('should handle SUBMIT_USER_REGISTRATION', () => {
			const action = {
				type: actions.SUBMIT_USER_REGISTRATION
			};
			const result = loading(getState(), action);
			expect(result.registrationLoading).toBe(true);
		});
		it('should handle SUBMIT_USER_REGISTRATION_FAILURE', () => {
			const initialState = getState({
				registrationLoading: true
			});
			const action = {
				type: actions.SUBMIT_USER_REGISTRATION_FAILURE
			};
			const result = loading(initialState, action);
			expect(result.registrationLoading).toBe(false);
		});
		it('should handle SUBMIT_USER_REGISTRATION_SUCCESS', () => {
			const initialState = getState({
				registrationLoading: true
			});
			const action = {
				type: actions.SUBMIT_USER_REGISTRATION_SUCCESS
			};
			const result = loading(initialState, action);
			expect(result.registrationLoading).toBe(false);
		});
	});
	describe('reset password', () => {
		it('should handle SUBMIT_USER_RESET_PASSWORD', () => {
			const action = {
				type: actions.SUBMIT_USER_RESET_PASSWORD
			};
			const result = loading(getState(), action);
			expect(result.resetPasswordLoading).toBe(true);
		});
		it('should handle SUBMIT_USER_RESET_PASSWORD_FAILURE', () => {
			const initialState = getState({
				resetPasswordLoading: true
			});
			const action = {
				type: actions.SUBMIT_USER_RESET_PASSWORD_FAILURE
			};
			const result = loading(initialState, action);
			expect(result.resetPasswordLoading).toBe(false);
		});
		it('should handle SUBMIT_USER_RESET_PASSWORD_SUCCESS', () => {
			const initialState = getState({
				resetPasswordLoading: true
			});
			const action = {
				type: actions.SUBMIT_USER_RESET_PASSWORD_SUCCESS
			};
			const result = loading(initialState, action);
			expect(result.resetPasswordLoading).toBe(false);
		});
	});
	describe('untrack character', () => {
		it('should handle UNTRACK_CHARACTER', () => {
			const action = {
				type: actions.UNTRACK_CHARACTER
			};
			const result = loading(getState(), action);
			expect(result.untrackCharactersLoading).toBe(true);
		});
		it('should handle UNTRACK_CHARACTER_FAILURE', () => {
			const initialState = getState({
				untrackCharactersLoading: true
			});
			const action = {
				type: actions.UNTRACK_CHARACTER_FAILURE
			};
			const result = loading(initialState, action);
			expect(result.untrackCharactersLoading).toBe(false);
		});
		it('should handle UNTRACK_CHARACTER_SUCCESS', () => {
			const initialState = getState({
				untrackCharactersLoading: true
			});
			const action = {
				type: actions.UNTRACK_CHARACTER_SUCCESS
			};
			const result = loading(initialState, action);
			expect(result.untrackCharactersLoading).toBe(false);
		});
	});
	describe('untrack thread', () => {
		it('should handle UNTRACK_THREAD', () => {
			const action = {
				type: actions.UNTRACK_THREAD
			};
			const result = loading(getState(), action);
			expect(result.untrackThreadLoading).toBe(true);
		});
		it('should handle UNTRACK_THREAD_FAILURE', () => {
			const initialState = getState({
				untrackThreadLoading: true
			});
			const action = {
				type: actions.UNTRACK_THREAD_FAILURE
			};
			const result = loading(initialState, action);
			expect(result.untrackThreadLoading).toBe(false);
		});
		it('should handle UNTRACK_THREAD_SUCCESS', () => {
			const initialState = getState({
				untrackThreadLoading: true
			});
			const action = {
				type: actions.UNTRACK_THREAD_SUCCESS
			};
			const result = loading(initialState, action);
			expect(result.untrackThreadLoading).toBe(false);
		});
	});
	describe('upsert character', () => {
		it('should handle UPSERT_CHARACTER', () => {
			const action = {
				type: actions.UPSERT_CHARACTER
			};
			const result = loading(getState(), action);
			expect(result.upsertCharactersLoading).toBe(true);
		});
		it('should handle UPSERT_CHARACTER_FAILURE', () => {
			const initialState = getState({
				upsertCharactersLoading: true
			});
			const action = {
				type: actions.UPSERT_CHARACTER_FAILURE
			};
			const result = loading(initialState, action);
			expect(result.upsertCharactersLoading).toBe(false);
		});
		it('should handle UPSERT_CHARACTER_SUCCESS', () => {
			const initialState = getState({
				upsertCharactersLoading: true
			});
			const action = {
				type: actions.UPSERT_CHARACTER_SUCCESS
			};
			const result = loading(initialState, action);
			expect(result.upsertCharactersLoading).toBe(false);
		});
	});
	describe('upsert public view', () => {
		it('should handle UPSERT_CHARACTER', () => {
			const action = {
				type: actions.UPSERT_PUBLIC_VIEW
			};
			const result = loading(getState(), action);
			expect(result.upsertPublicViewLoading).toBe(true);
		});
		it('should handle UPSERT_PUBLIC_VIEW_FAILURE', () => {
			const initialState = getState({
				upsertPublicViewLoading: true
			});
			const action = {
				type: actions.UPSERT_PUBLIC_VIEW_FAILURE
			};
			const result = loading(initialState, action);
			expect(result.upsertPublicViewLoading).toBe(false);
		});
		it('should handle UPSERT_PUBLIC_VIEW_SUCCESS', () => {
			const initialState = getState({
				upsertPublicViewLoading: true
			});
			const action = {
				type: actions.UPSERT_PUBLIC_VIEW_SUCCESS
			};
			const result = loading(initialState, action);
			expect(result.upsertPublicViewLoading).toBe(false);
		});
	});
	describe('upsert thread', () => {
		it('should handle UPSERT_THREAD', () => {
			const action = {
				type: actions.UPSERT_THREAD
			};
			const result = loading(getState(), action);
			expect(result.upsertThreadLoading).toBe(true);
		});
		it('should handle UPSERT_THREAD_FAILURE', () => {
			const initialState = getState({
				upsertThreadLoading: true
			});
			const action = {
				type: actions.UPSERT_THREAD_FAILURE
			};
			const result = loading(initialState, action);
			expect(result.upsertThreadLoading).toBe(false);
		});
		it('should handle UPSERT_THREAD_SUCCESS', () => {
			const initialState = getState({
				upsertThreadLoading: true
			});
			const action = {
				type: actions.UPSERT_THREAD_SUCCESS
			};
			const result = loading(initialState, action);
			expect(result.upsertThreadLoading).toBe(false);
		});
	});
	describe('logout', () => {
		it('should handle SUBMIT_USER_LOGOUT', () => {
			const action = {
				type: actions.SUBMIT_USER_LOGOUT
			};
			const result = loading(
				{
					upsertThreadLoading: true
				},
				action
			);
			expect(result).toEqual(getState());
		});
	});
});
