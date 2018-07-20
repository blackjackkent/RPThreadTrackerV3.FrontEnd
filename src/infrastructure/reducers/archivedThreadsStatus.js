import { FETCHED_ARCHIVED_THREADS_STATUS_CHUNK_SUCCESS, FETCH_ARCHIVED_THREADS_STATUS, SUBMIT_USER_LOGOUT, UPDATE_THREAD_SUCCESS } from '../actions';

function archivedThreadsStatus(state = [], action) {
	switch (action.type) {
		case FETCH_ARCHIVED_THREADS_STATUS:
			return [];
		case FETCHED_ARCHIVED_THREADS_STATUS_CHUNK_SUCCESS:
			return [...state].concat(action.data);
		case SUBMIT_USER_LOGOUT:
		case UPDATE_THREAD_SUCCESS:
			return [];
		default:
			return state;
	}
}

export default archivedThreadsStatus;
