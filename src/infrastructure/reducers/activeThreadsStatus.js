import { FETCHED_ACTIVE_THREADS_STATUS_CHUNK_SUCCESS } from '../actions';

function activeThreads(state = [], action) {
	switch (action.type) {
		case FETCHED_ACTIVE_THREADS_STATUS_CHUNK_SUCCESS:
			return [...state].concat(action.data);
		default:
			return state;
	}
}

export default activeThreads;
