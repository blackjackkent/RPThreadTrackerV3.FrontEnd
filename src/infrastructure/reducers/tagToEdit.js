import {
	CLOSE_DELETE_PUBLIC_VIEW_MODAL,
	CLOSE_UPSERT_PUBLIC_VIEW_MODAL,
	OPEN_DELETE_PUBLIC_VIEW_MODAL,
	OPEN_UPSERT_PUBLIC_VIEW_MODAL,
	SUBMIT_USER_LOGOUT,
	OPEN_BULK_UPDATE_TAG_MODAL,
	CLOSE_BULK_UPDATE_TAG_MODAL,
	OPEN_BULK_DELETE_TAG_MODAL,
	CLOSE_BULK_DELETE_TAG_MODAL
} from '../actions';

const defaultState = {
	selectedTag: null,
	updatedValue: null
};
function viewToEdit(state = defaultState, action) {
	switch (action.type) {
		case OPEN_BULK_UPDATE_TAG_MODAL:
		case OPEN_BULK_DELETE_TAG_MODAL:
			return action.data ? action.data : defaultState;
		case CLOSE_BULK_UPDATE_TAG_MODAL:
		case CLOSE_BULK_DELETE_TAG_MODAL:
		case SUBMIT_USER_LOGOUT:
			return defaultState;
		default:
			return state;
	}
}

export default viewToEdit;
