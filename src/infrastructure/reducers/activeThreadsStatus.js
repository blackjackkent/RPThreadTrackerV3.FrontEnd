import { FETCHED_ACTIVE_THREADS_STATUS_CHUNK_SUCCESS, FETCH_ACTIVE_THREADS_STATUS, SUBMIT_USER_LOGOUT } from '../actions';

function activeThreads(state = [], action) {
	switch (action.type) {
		case FETCH_ACTIVE_THREADS_STATUS:
			return [];
		case FETCHED_ACTIVE_THREADS_STATUS_CHUNK_SUCCESS:
			return [...state].concat(action.data);
		case SUBMIT_USER_LOGOUT:
			return [];
		default:
			return state;
	}
}

export default activeThreads;
