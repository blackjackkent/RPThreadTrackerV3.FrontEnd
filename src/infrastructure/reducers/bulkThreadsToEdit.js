import { CLOSE_BULK_UNTRACK_THREADS_MODAL, OPEN_BULK_UNTRACK_THREADS_MODAL, SUBMIT_USER_LOGOUT } from '../actions';

function bulkThreadsToEdit(state = [], action) {
	switch (action.type) {
		case OPEN_BULK_UNTRACK_THREADS_MODAL:
			return action.data;
		case CLOSE_BULK_UNTRACK_THREADS_MODAL:
		case SUBMIT_USER_LOGOUT:
			return [];
		default:
			return state;
	}
}

export default bulkThreadsToEdit;
