import { OPEN_EDIT_CHARACTER_MODAL, CLOSE_EDIT_CHARACTER_MODAL } from '../actions';

function characterToEdit(state = {}, action) {
	switch (action.type) {
		case OPEN_EDIT_CHARACTER_MODAL:
			return action.data;
		case CLOSE_EDIT_CHARACTER_MODAL:
			return {};
		default:
			return state;
	}
}

export default characterToEdit;
