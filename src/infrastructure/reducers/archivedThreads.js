import {
	FETCH_ARCHIVED_THREADS,
	FETCHED_ARCHIVED_THREADS_FAILURE,
	FETCHED_ARCHIVED_THREADS_SUCCESS,
	SUBMIT_USER_LOGOUT,
	UPSERT_THREAD_SUCCESS
} from '../actions';

function archivedThreads(state = [], action) {
	switch (action.type) {
		case FETCH_ARCHIVED_THREADS:
		case FETCHED_ARCHIVED_THREADS_FAILURE:
			return [];
		case FETCHED_ARCHIVED_THREADS_SUCCESS:
			return action.data.threads;
		case UPSERT_THREAD_SUCCESS:
		case SUBMIT_USER_LOGOUT:
			return [];
		default:
			return state;
	}
}

export default archivedThreads;
