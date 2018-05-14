import { FETCH_PUBLIC_THREADS_STATUS, FETCHED_PUBLIC_THREADS_STATUS_CHUNK_SUCCESS } from '../actions';

function publicThreadsStatus(state = [], action) {
	switch (action.type) {
		case FETCH_PUBLIC_THREADS_STATUS:
			return [];
		case FETCHED_PUBLIC_THREADS_STATUS_CHUNK_SUCCESS:
			return [...state].concat(action.data);
		default:
			return state;
	}
}

export default publicThreadsStatus;
