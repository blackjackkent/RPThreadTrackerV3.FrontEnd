import { FETCHED_ARCHIVED_THREADS_SUCCESS } from '../actions';

function archivedThreads(state = [], action) {
	switch (action.type) {
		case FETCHED_ARCHIVED_THREADS_SUCCESS:
			return action.data;
		default:
			return state;
	}
}

export default archivedThreads;
