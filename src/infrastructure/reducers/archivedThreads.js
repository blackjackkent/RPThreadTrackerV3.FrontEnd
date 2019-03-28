import {
	FETCH_ARCHIVED_THREADS,
	FETCHED_ARCHIVED_THREADS_FAILURE,
	FETCHED_ARCHIVED_THREADS_SUCCESS,
	SUBMIT_USER_LOGOUT,
	UPSERT_THREAD_SUCCESS,
	CLEAR_ARCHIVED_THREADS
} from '../actions';

function archivedThreads(state = [], action) {
	switch (action.type) {
		case FETCHED_ARCHIVED_THREADS_SUCCESS:
			return action.data.threads;
		case FETCH_ARCHIVED_THREADS:
		case FETCHED_ARCHIVED_THREADS_FAILURE:
		case UPSERT_THREAD_SUCCESS:
		case CLEAR_ARCHIVED_THREADS:
		case SUBMIT_USER_LOGOUT:
			return [];
		default:
			return state;
	}
}

export default archivedThreads;
