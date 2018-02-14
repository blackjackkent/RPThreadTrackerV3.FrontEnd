import { CLOSE_UNTRACK_THREAD_MODAL, OPEN_UNTRACK_THREAD_MODAL, SUBMIT_USER_LOGOUT } from '../actions';

function characterToEdit(state = {}, action) {
	switch (action.type) {
		case OPEN_UNTRACK_THREAD_MODAL:
			return action.data;
		case CLOSE_UNTRACK_THREAD_MODAL:
		case SUBMIT_USER_LOGOUT:
			return {};
		default:
			return state;
	}
}

export default characterToEdit;
