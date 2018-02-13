import { OPEN_EDIT_CHARACTER_MODAL, CLOSE_EDIT_CHARACTER_MODAL, SUBMIT_USER_LOGOUT } from '../actions';

function characterToEdit(state = {}, action) {
	switch (action.type) {
		case OPEN_EDIT_CHARACTER_MODAL:
			return action.data;
		case CLOSE_EDIT_CHARACTER_MODAL:
			return {};
		case SUBMIT_USER_LOGOUT:
			return {};
		default:
			return state;
	}
}

export default characterToEdit;
