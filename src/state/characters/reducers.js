import {
	INVALIDATE_CHARACTERS,
	REQUEST_CHARACTERS,
	RECEIVE_CHARACTERS
} from './actions';

function characters(state = {
	isFetching: false,
	didInvalidate: false,
	items: []
}, action) {
	switch (action.type) {
		case INVALIDATE_CHARACTERS:
			return Object.assign({}, state, {
				characters: {
					didInvalidate: true
				}
			});
		case REQUEST_CHARACTERS:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false,
				items: []
			});
		case RECEIVE_CHARACTERS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				items: action.data
			});
		default:
			return state;
	}
}

export default characters;
