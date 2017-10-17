import {
	NEWS_FETCH_SUCCEEDED,
	NEWS_FETCH_FAILED,
	REQUEST_NEWS
} from './actions';

function news(state = {
	isFetching: false,
	items: []
}, action) {
	switch (action.type) {
		case NEWS_FETCH_SUCCEEDED:
			return Object.assign({}, state, {
				isFetching: false,
				items: action.news
			});
		case NEWS_FETCH_FAILED:
			return Object.assign({}, state, {
				isFetching: false,
				items: []
			});
		default:
			return state;
	}
}

export default news;
