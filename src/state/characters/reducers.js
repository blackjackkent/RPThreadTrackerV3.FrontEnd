import {
	INVALIDATE_CHARACTERS,
	REQUEST_CHARACTERS,
	RECEIVE_CHARACTERS_SUCCESS,
	RECEIVE_CHARACTERS_FAILURE
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
		case RECEIVE_CHARACTERS_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				items: action.data
			});

		case RECEIVE_CHARACTERS_FAILURE:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				items: []
			});
		default:
			return state;
	}
}

export default characters;
