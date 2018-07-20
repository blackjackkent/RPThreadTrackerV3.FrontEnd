import { FETCHED_ACTIVE_THREADS_STATUS_CHUNK_SUCCESS, FETCH_ACTIVE_THREADS_STATUS, SUBMIT_USER_LOGOUT, UPDATE_THREAD_SUCCESS } from '../actions';

function activeThreadsStatus(state = [], action) {
	switch (action.type) {
		case FETCH_ACTIVE_THREADS_STATUS:
			return [];
		case FETCHED_ACTIVE_THREADS_STATUS_CHUNK_SUCCESS:
			return [...state].concat(action.data);
		case SUBMIT_USER_LOGOUT:
		case UPDATE_THREAD_SUCCESS:
			return [];
		default:
			return state;
	}
}

export default activeThreadsStatus;
