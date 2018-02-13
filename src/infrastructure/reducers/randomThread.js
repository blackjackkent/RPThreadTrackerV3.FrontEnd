import { GENERATED_RANDOM_THREAD_SUCCESS, SUBMIT_USER_LOGOUT } from '../actions';

function randomThread(state = {}, action) {
	switch (action.type) {
		case GENERATED_RANDOM_THREAD_SUCCESS:
			return action.data;
		case SUBMIT_USER_LOGOUT:
			return [];
		default:
			return state;
	}
}

export default randomThread;
