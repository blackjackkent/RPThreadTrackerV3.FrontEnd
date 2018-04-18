import { OPEN_UPSERT_PUBLIC_VIEW_MODAL, CLOSE_UPSERT_PUBLIC_VIEW_MODAL, OPEN_UNTRACK_PUBLIC_VIEW_MODAL, CLOSE_UNTRACK_PUBLIC_VIEW_MODAL, SUBMIT_USER_LOGOUT } from '../actions/ui/openUpsertPublicViewModal';

const defaultState = {};
function viewToEdit(state = defaultState, action) {
	switch (action.type) {
		case OPEN_UNTRACK_PUBLIC_VIEW_MODAL:
		case OPEN_UPSERT_PUBLIC_VIEW_MODAL:
			return action.data ? action.data : defaultState;
		case CLOSE_UNTRACK_PUBLIC_VIEW_MODAL:
		case CLOSE_UPSERT_PUBLIC_VIEW_MODAL:
		case SUBMIT_USER_LOGOUT:
			return defaultState;
		default:
			return state;
	}
}

export default viewToEdit;
