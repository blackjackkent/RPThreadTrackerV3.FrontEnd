import { OPEN_UPSERT_CHARACTER_MODAL, CLOSE_UPSERT_CHARACTER_MODAL, SUBMIT_USER_LOGOUT } from '../actions';

function characterToEdit(state = null, action) {
	switch (action.type) {
		case OPEN_UPSERT_CHARACTER_MODAL:
			return action.data;
		case CLOSE_UPSERT_CHARACTER_MODAL:
		case SUBMIT_USER_LOGOUT:
			return null;
		default:
			return state;
	}
}

export default characterToEdit;
