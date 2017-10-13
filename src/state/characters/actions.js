import axios from 'axios';

export const REQUEST_CHARACTERS = 'REQUEST_CHARACTERS';
export const RECEIVE_CHARACTERS = 'RECEIVE_CHARACTERS';
export const INVALIDATE_CHARACTERS = 'INVALIDATE_CHARACTERS';

export function invalidateCharacters() {
	return {
		type: INVALIDATE_CHARACTERS
	};
}

function receiveCharacters(json) {
	return {
		type: RECEIVE_CHARACTERS,
		data: json
	};
}

function requestCharacters() {
	return {
		type: REQUEST_CHARACTERS
	};
}

function shouldFetchCharacters(state) {
	const characters = state.characters.items;
	if (!characters || !characters.length) {
		return true;
	} else if (characters.isFetching) {
		return false;
	}
	return characters.didInvalidate;
}

function fetchCharacters() {
	return (dispatch) => {
		dispatch(requestCharacters());
		return axios.get('http://localhost:3001/characters')
			.then(response => response.data)
			.then(json => dispatch(receiveCharacters(json)));
	};
}

export function fetchCharactersIfNeeded() {
	return (dispatch, getState) => {
		if (shouldFetchCharacters(getState())) {
			return dispatch(fetchCharacters());
		}
		return null;
	};
}
