import { FETCHED_ACTIVE_THREADS_STATUS_SUCCESS } from '../actions';

function activeThreads(state = [], action) {
	switch (action.type) {
		case FETCHED_ACTIVE_THREADS_STATUS_SUCCESS:
			return action.data;
		default:
			return state;
	}
}

export default activeThreads;
