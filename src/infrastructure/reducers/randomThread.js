import { GENERATED_RANDOM_THREAD_SUCCESS } from '../actions';

function randomThread(state = {}, action) {
	switch (action.type) {
		case GENERATED_RANDOM_THREAD_SUCCESS:
			return action.data;
		default:
			return state;
	}
}

export default randomThread;
