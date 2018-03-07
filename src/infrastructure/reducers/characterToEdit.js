import { OPEN_UPSERT_CHARACTER_MODAL, CLOSE_UPSERT_CHARACTER_MODAL, SUBMIT_USER_LOGOUT, OPEN_UNTRACK_CHARACTER_MODAL, CLOSE_UNTRACK_CHARACTER_MODAL } from '../actions';

function characterToEdit(state = {}, action) {
	switch (action.type) {
		case OPEN_UNTRACK_CHARACTER_MODAL:
		case OPEN_UPSERT_CHARACTER_MODAL:
			return action.data;
		case CLOSE_UNTRACK_CHARACTER_MODAL:
		case CLOSE_UPSERT_CHARACTER_MODAL:
		case SUBMIT_USER_LOGOUT:
			return {};
		default:
			return state;
	}
}

export default characterToEdit;
