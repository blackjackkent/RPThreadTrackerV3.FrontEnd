import { SET_PUBLIC_THREAD_FILTER, SUBMIT_USER_LOGOUT } from '../actions';
import publicThreadFilterKeys from '../constants/publicThreadFilterKeys';

function threadFilter(state = publicThreadFilterKeys.ALL, action) {
	switch (action.type) {
		case SET_PUBLIC_THREAD_FILTER:
			return action.data;
		case SUBMIT_USER_LOGOUT:
			return publicThreadFilterKeys.ALL;
		default:
			return state;
	}
}

export default threadFilter;
