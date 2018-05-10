import { FETCHED_ARCHIVED_THREADS_SUCCESS, SUBMIT_USER_LOGOUT, UPSERT_THREAD_SUCCESS } from '../actions';

function archivedThreads(state = [], action) {
	switch (action.type) {
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
