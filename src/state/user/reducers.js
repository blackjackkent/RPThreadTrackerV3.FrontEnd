import {
	INVALIDATE_USER,
	REQUEST_USER,
	RECEIVE_USER
} from './actions';

function user(state = {
	id: '',
	userName: '',
	email: '',
	settings: {
		hasDashboardAtAGlanceHidden: false
	}
}, action) {
	switch (action.type) {
		case INVALIDATE_USER:
			return Object.assign({}, state, {});
		case REQUEST_USER:
			return Object.assign({}, state, {});
		case RECEIVE_USER:
			return Object.assign({}, state, action.data);
		default:
			return state;
	}
}

export default user;
