// #region imports
import {
	FETCHED_ACTIVE_THREADS_FAILURE,
	FETCHED_ACTIVE_THREADS_STATUS_FAILURE,
	FETCHED_ACTIVE_THREADS_STATUS_SUCCESS,
	FETCHED_ARCHIVED_THREADS_FAILURE,
	FETCHED_ARCHIVED_THREADS_STATUS_FAILURE,
	FETCHED_ARCHIVED_THREADS_STATUS_SUCCESS,
	FETCH_ACTIVE_THREADS,
	FETCH_ARCHIVED_THREADS,
	FETCH_CHARACTERS,
	SUBMIT_USER_LOGOUT,
	SUBMIT_USER_REGISTRATION,
	SUBMIT_USER_REGISTRATION_FAILURE,
	SUBMIT_USER_REGISTRATION_SUCCESS,
	SUBMIT_USER_FORGOT_PASSWORD_FAILURE,
	SUBMIT_USER_FORGOT_PASSWORD_SUCCESS,
	SUBMIT_USER_FORGOT_PASSWORD,
	SUBMIT_USER_RESET_PASSWORD,
	SUBMIT_USER_RESET_PASSWORD_FAILURE,
	SUBMIT_USER_RESET_PASSWORD_SUCCESS,
	FETCHED_CHARACTERS_FAILURE,
	FETCHED_CHARACTERS_SUCCESS,
	UNTRACK_CHARACTER,
	UNTRACK_CHARACTER_FAILURE,
	UNTRACK_CHARACTER_SUCCESS,
	UPSERT_CHARACTER,
	UPSERT_CHARACTER_FAILURE,
	UPSERT_CHARACTER_SUCCESS,
	UPSERT_PUBLIC_VIEW,
	UPSERT_PUBLIC_VIEW_FAILURE,
	UPSERT_PUBLIC_VIEW_SUCCESS,
	DELETE_PUBLIC_VIEW,
	DELETE_PUBLIC_VIEW_FAILURE,
	DELETE_PUBLIC_VIEW_SUCCESS,
	FETCH_PUBLIC_VIEWS,
	FETCHED_PUBLIC_VIEWS_FAILURE,
	FETCHED_PUBLIC_VIEWS_SUCCESS,
	EXPORT_THREADS,
	EXPORT_THREADS_FAILURE,
	EXPORT_THREADS_SUCCESS,
	UNTRACK_THREAD,
	UNTRACK_THREAD_FAILURE,
	UNTRACK_THREAD_SUCCESS,
	BULK_UNTRACK_THREADS,
	BULK_UNTRACK_THREADS_FAILURE,
	BULK_UNTRACK_THREADS_SUCCESS,
	UPSERT_THREAD,
	UPSERT_THREAD_FAILURE,
	UPSERT_THREAD_SUCCESS,
	BULK_UPDATE_THREADS,
	BULK_UPDATE_THREADS_FAILURE,
	BULK_UPDATE_THREADS_SUCCESS,
	SUBMIT_USER_CHANGE_PASSWORD,
	SUBMIT_USER_CHANGE_PASSWORD_FAILURE,
	SUBMIT_USER_CHANGE_PASSWORD_SUCCESS,
	SUBMIT_USER_ACCOUNT_INFO,
	SUBMIT_USER_ACCOUNT_INFO_FAILURE,
	SUBMIT_USER_ACCOUNT_INFO_SUCCESS,
	FETCH_PUBLIC_THREADS,
	FETCH_LEGACY_PUBLIC_THREADS,
	FETCHED_PUBLIC_THREADS_FAILURE,
	FETCHED_PUBLIC_THREADS_STATUS_FAILURE,
	FETCHED_PUBLIC_THREADS_STATUS_SUCCESS,
	BULK_UPDATE_TAG_SUCCESS,
	BULK_UPDATE_TAG_FAILURE,
	BULK_UPDATE_TAG,
	BULK_DELETE_TAG,
	BULK_DELETE_TAG_FAILURE,
	BULK_DELETE_TAG_SUCCESS
} from '../actions';
// #endregion imports

const defaultState = {
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
	upsertThreadLoading: false
};
function loading(state = defaultState, action) {
	switch (action.type) {
		// #region Active Threads
		case FETCH_ACTIVE_THREADS:
			return Object.assign({}, state, {
				activeThreadsLoading: true
			});
		case FETCHED_ACTIVE_THREADS_FAILURE:
		case FETCHED_ACTIVE_THREADS_STATUS_SUCCESS:
		case FETCHED_ACTIVE_THREADS_STATUS_FAILURE:
			return Object.assign({}, state, {
				activeThreadsLoading: false
			});
		// #endregion
		// #region Archived Threads
		case FETCH_ARCHIVED_THREADS:
			return Object.assign({}, state, {
				archivedThreadsLoading: true
			});
		case FETCHED_ARCHIVED_THREADS_FAILURE:
		case FETCHED_ARCHIVED_THREADS_STATUS_SUCCESS:
		case FETCHED_ARCHIVED_THREADS_STATUS_FAILURE:
			return Object.assign({}, state, {
				archivedThreadsLoading: false
			});
		// #endregion
		// #region Bulk Untrack Threads
		case BULK_UNTRACK_THREADS:
			return Object.assign({}, state, {
				bulkUpsertThreadsLoading: true
			});
		case BULK_UNTRACK_THREADS_FAILURE:
		case BULK_UNTRACK_THREADS_SUCCESS:
			return Object.assign({}, state, {
				bulkUpsertThreadsLoading: false
			});
		// #endregion
		// #region Bulk Update Threads
		case BULK_UPDATE_THREADS:
			return Object.assign({}, state, {
				bulkUpsertThreadsLoading: true
			});
		case BULK_UPDATE_THREADS_FAILURE:
		case BULK_UPDATE_THREADS_SUCCESS:
			return Object.assign({}, state, {
				bulkUpsertThreadsLoading: false
			});
		// #endregion
		// #region Bulk Update Tag
		case BULK_UPDATE_TAG:
			return Object.assign({}, state, {
				bulkUpdateTagLoading: true
			});
		case BULK_UPDATE_TAG_FAILURE:
		case BULK_UPDATE_TAG_SUCCESS:
			return Object.assign({}, state, {
				bulkUpdateTagLoading: false
			});
		// #endregion
		// #region Bulk Delete Tag
		case BULK_DELETE_TAG:
			return Object.assign({}, state, {
				bulkDeleteTagLoading: true
			});
		case BULK_DELETE_TAG_FAILURE:
		case BULK_DELETE_TAG_SUCCESS:
			return Object.assign({}, state, {
				bulkDeleteTagLoading: false
			});
		// #endregion
		// #region Change Account Info
		case SUBMIT_USER_ACCOUNT_INFO:
			return Object.assign({}, state, {
				changeAccountInfoLoading: true
			});
		case SUBMIT_USER_ACCOUNT_INFO_FAILURE:
		case SUBMIT_USER_ACCOUNT_INFO_SUCCESS:
			return Object.assign({}, state, {
				changeAccountInfoLoading: false
			});
		// #endregion
		// #region Change Password
		case SUBMIT_USER_CHANGE_PASSWORD:
			return Object.assign({}, state, {
				changePasswordLoading: true
			});
		case SUBMIT_USER_CHANGE_PASSWORD_FAILURE:
		case SUBMIT_USER_CHANGE_PASSWORD_SUCCESS:
			return Object.assign({}, state, {
				changePasswordLoading: false
			});
		// #endregion
		// #region Characters
		case FETCH_CHARACTERS:
			return Object.assign({}, state, {
				charactersLoading: true
			});
		case FETCHED_CHARACTERS_FAILURE:
		case FETCHED_CHARACTERS_SUCCESS:
			return Object.assign({}, state, {
				charactersLoading: false
			});
		// #endregion
		// #region Delete Public View
		case DELETE_PUBLIC_VIEW:
			return Object.assign({}, state, {
				deletePublicViewLoading: true
			});
		case DELETE_PUBLIC_VIEW_FAILURE:
		case DELETE_PUBLIC_VIEW_SUCCESS:
			return Object.assign({}, state, {
				deletePublicViewLoading: false
			});
		// #endregion
		// #region Export Threads
		case EXPORT_THREADS:
			return Object.assign({}, state, {
				exportThreadsLoading: true
			});
		case EXPORT_THREADS_FAILURE:
		case EXPORT_THREADS_SUCCESS:
			return Object.assign({}, state, {
				exportThreadsLoading: false
			});
		// #endregion
		// #region Forgot Password
		case SUBMIT_USER_FORGOT_PASSWORD_SUCCESS:
		case SUBMIT_USER_FORGOT_PASSWORD_FAILURE:
			return Object.assign({}, state, {
				forgotPasswordLoading: false
			});
		case SUBMIT_USER_FORGOT_PASSWORD:
			return Object.assign({}, state, {
				forgotPasswordLoading: true
			});
		// #endregion
		// #region Public Views
		case FETCH_PUBLIC_VIEWS:
			return Object.assign({}, state, {
				publicViewsLoading: true
			});
		case FETCHED_PUBLIC_VIEWS_FAILURE:
		case FETCHED_PUBLIC_VIEWS_SUCCESS:
			return Object.assign({}, state, {
				publicViewsLoading: false
			});
		// #endregion
		// #region Public Threads
		case FETCH_PUBLIC_THREADS:
		case FETCH_LEGACY_PUBLIC_THREADS:
			return Object.assign({}, state, {
				publicThreadsLoading: true
			});
		case FETCHED_PUBLIC_THREADS_FAILURE:
		case FETCHED_PUBLIC_THREADS_STATUS_FAILURE:
		case FETCHED_PUBLIC_THREADS_STATUS_SUCCESS:
			return Object.assign({}, state, {
				publicThreadsLoading: false
			});
		// #endregion
		// #region Registration
		case SUBMIT_USER_REGISTRATION_FAILURE:
		case SUBMIT_USER_REGISTRATION_SUCCESS:
			return Object.assign({}, state, {
				registrationLoading: false
			});
		case SUBMIT_USER_REGISTRATION:
			return Object.assign({}, state, {
				registrationLoading: true
			});
		// #endregion
		// #region Reset Password
		case SUBMIT_USER_RESET_PASSWORD_FAILURE:
		case SUBMIT_USER_RESET_PASSWORD_SUCCESS:
			return Object.assign({}, state, {
				resetPasswordLoading: false
			});
		case SUBMIT_USER_RESET_PASSWORD:
			return Object.assign({}, state, {
				resetPasswordLoading: true
			});
		// #endregion
		// #region Untrack Character
		case UNTRACK_CHARACTER:
			return Object.assign({}, state, {
				untrackCharactersLoading: true
			});
		case UNTRACK_CHARACTER_FAILURE:
		case UNTRACK_CHARACTER_SUCCESS:
			return Object.assign({}, state, {
				untrackCharactersLoading: false
			});
		// #endregion
		// #region Untrack Thread
		case UNTRACK_THREAD:
			return Object.assign({}, state, {
				untrackThreadLoading: true
			});
		case UNTRACK_THREAD_FAILURE:
		case UNTRACK_THREAD_SUCCESS:
			return Object.assign({}, state, {
				untrackThreadLoading: false
			});
		// #endregion
		// #region Upsert Character
		case UPSERT_CHARACTER:
			return Object.assign({}, state, {
				upsertCharactersLoading: true
			});
		case UPSERT_CHARACTER_FAILURE:
		case UPSERT_CHARACTER_SUCCESS:
			return Object.assign({}, state, {
				upsertCharactersLoading: false
			});
		// #endregion
		// #region Upsert Public View
		case UPSERT_PUBLIC_VIEW:
			return Object.assign({}, state, {
				upsertPublicViewLoading: true
			});
		case UPSERT_PUBLIC_VIEW_FAILURE:
		case UPSERT_PUBLIC_VIEW_SUCCESS:
			return Object.assign({}, state, {
				upsertPublicViewLoading: false
			});
		// #endregion
		// #region Upsert Thread
		case UPSERT_THREAD:
			return Object.assign({}, state, {
				upsertThreadLoading: true
			});
		case UPSERT_THREAD_FAILURE:
		case UPSERT_THREAD_SUCCESS:
			return Object.assign({}, state, {
				upsertThreadLoading: false
			});
		// #endregion
		case SUBMIT_USER_LOGOUT:
			return defaultState;
		default:
			return state;
	}
}

export default loading;
