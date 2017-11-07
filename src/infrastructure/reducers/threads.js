import { FETCHED_THREADS_SUCCESS } from '../actions';

function threads(state = [], action) {
	switch (action.type) {
		case FETCHED_THREADS_SUCCESS:
			return action.data;
		default:
			return state;
	}
}

export default threads;
