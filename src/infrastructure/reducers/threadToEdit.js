import {
	CLOSE_UNTRACK_THREAD_MODAL,
	CLOSE_UPSERT_THREAD_MODAL,
	OPEN_UNTRACK_THREAD_MODAL,
	OPEN_UPSERT_THREAD_MODAL,
	SUBMIT_USER_LOGOUT
} from '../actions';

const defaultState = {
	characterId: null,
	userTitle: '',
	postId: '',
	partnerUrlIdentifier: '',
	threadTags: []
};
function threadToEdit(state = defaultState, action) {
	switch (action.type) {
		case OPEN_UNTRACK_THREAD_MODAL:
		case OPEN_UPSERT_THREAD_MODAL:
			return action.data ? action.data : defaultState;
		case CLOSE_UNTRACK_THREAD_MODAL:
		case CLOSE_UPSERT_THREAD_MODAL:
		case SUBMIT_USER_LOGOUT:
			return defaultState;
		default:
			return state;
	}
}

export default threadToEdit;
