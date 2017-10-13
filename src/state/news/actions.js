import axios from 'axios';

export const REQUEST_NEWS = 'REQUEST_NEWS';
export const RECEIVE_NEWS = 'RECEIVE_NEWS';

export function requestNews() {
	return {
		type: REQUEST_NEWS
	};
}

function receiveNews(json) {
	return {
		type: RECEIVE_NEWS,
		data: json
	};
}

function shouldFetchNews(state) {
	const news = state.news.items;
	if (!news || !news.length) {
		return true;
	} else if (news.isFetching) {
		return false;
	}
	return false;
}

function fetchNews() {
	return (dispatch) => {
		dispatch(requestNews());
		return axios.get('http://localhost:3001/news')
			.then(response => response.data)
			.then(json => dispatch(receiveNews(json)));
	};
}

export function fetchNewsIfNeeded() {
	return (dispatch, getState) => {
		if (shouldFetchNews(getState())) {
			return dispatch(fetchNews());
		}
		return null;
	};
}
