import axios from 'axios';

export const NEWS_FETCH_REQUESTED = 'NEWS_FETCH_REQUESTED';
export const NEWS_FETCH_SUCCEEDED = 'NEWS_FETCH_SUCCEEDED';
export const NEWS_FETCH_FAILED = 'NEWS_FETCH_FAILED';

export function fetchNews() {
	return {
		type: NEWS_FETCH_REQUESTED
	};
}

function newsFetchSucceeded(json) {
	return {
		type: NEWS_FETCH_SUCCEEDED,
		data: json
	};
}

function newsFetchFailed(message) {
	return {
		type: NEWS_FETCH_FAILED,
		message: message
	};
}
