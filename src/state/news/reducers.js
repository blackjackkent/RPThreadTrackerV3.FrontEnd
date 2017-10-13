import {
	RECEIVE_NEWS,
	REQUEST_NEWS
} from './actions';

function news(state = {
	isFetching: false,
	items: []
}, action) {
	switch (action.type) {
		case REQUEST_NEWS:
			return Object.assign({}, state, {
				isFetching: true,
				items: []
			});
		case RECEIVE_NEWS:
			return Object.assign({}, state, {
				isFetching: false,
				items: action.data
			});
		default:
			return state;
	}
}

export default news;
