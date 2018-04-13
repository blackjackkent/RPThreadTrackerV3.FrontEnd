import { FETCHED_ACTIVE_THREADS_SUCCESS, FETCHED_ACTIVE_THREADS_FAILURE, FETCH_ACTIVE_THREADS, SUBMIT_USER_LOGOUT } from '../actions';

function publicThreads(state = [], action) {
	switch (action.type) {
		case FETCH_ACTIVE_THREADS:
		case FETCHED_ACTIVE_THREADS_FAILURE:
			return [];
		case FETCHED_ACTIVE_THREADS_SUCCESS:
			return action.data.threads;
		case SUBMIT_USER_LOGOUT:
			return [];
		default:
			return state;
	}
}

export default publicThreads;
