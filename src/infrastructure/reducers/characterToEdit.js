import { OPEN_UPSERT_CHARACTER_MODAL, CLOSE_UPSERT_CHARACTER_MODAL, SUBMIT_USER_LOGOUT, OPEN_UNTRACK_CHARACTER_MODAL, CLOSE_UNTRACK_CHARACTER_MODAL } from '../actions';

const defaultState = {
	characterName: '',
	platformId: 1,
	urlIdentifier: ''
};
function characterToEdit(state = defaultState, action) {
	switch (action.type) {
		case OPEN_UNTRACK_CHARACTER_MODAL:
		case OPEN_UPSERT_CHARACTER_MODAL:
			return action.data ? action.data : defaultState;
		case CLOSE_UNTRACK_CHARACTER_MODAL:
		case CLOSE_UPSERT_CHARACTER_MODAL:
		case SUBMIT_USER_LOGOUT:
			return defaultState;
		default:
			return state;
	}
}

export default characterToEdit;
