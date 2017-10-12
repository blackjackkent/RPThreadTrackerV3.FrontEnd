import axios from 'axios';

export const REQUEST_CHARACTERS = 'REQUEST_CHARACTERS';
export const RECEIVE_CHARACTERS = 'RECEIVE_CHARACTERS';
export const INVALIDATE_CHARACTERS = 'INVALIDATE_CHARACTERS';

export function fetchCharactersIfNeeded() {
	return (dispatch, getState) => {
		if (shouldFetchCharacters(getState())) {
			return dispatch(fetchCharacters());
		}
	};
}

export function invalidateCharacters() {
	return {
		type: INVALIDATE_CHARACTERS
	};
}

function shouldFetchCharacters(state) {
	const characters = state.characters.items;
	if (!characters || !characters.length) {
		return true;
	} else if (characters.isFetching) {
		return false;
	} else {
		return characters.didInvalidate;
	}
}

function requestCharacters() {
	return {
		type: REQUEST_CHARACTERS
	};
}

function receiveCharacters(json) {
	return {
		type: RECEIVE_CHARACTERS,
		data: json,
		receivedAt: Date.now()
	};
}

function fetchCharacters() {
	return dispatch => {
		dispatch(requestCharacters());
		return axios.get(`http://localhost:3001/characters`)
			.then(response => response.json())
			.then(json => dispatch(receiveCharacters(json)));
	};
}
