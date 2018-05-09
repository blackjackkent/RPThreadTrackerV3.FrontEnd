import { SUBMIT_USER_LOGOUT, FETCHED_PUBLIC_THREADS_SUCCESS, FETCH_PUBLIC_THREADS, FETCHED_PUBLIC_THREADS_FAILURE } from '../actions';

function publicThreads(state = [], action) {
	switch (action.type) {
		case FETCH_PUBLIC_THREADS:
		case FETCHED_PUBLIC_THREADS_FAILURE:
			return [];
		case FETCHED_PUBLIC_THREADS_SUCCESS:
			return action.data;
		case SUBMIT_USER_LOGOUT:
			return [];
		default:
			return state;
	}
}

export default publicThreads;
