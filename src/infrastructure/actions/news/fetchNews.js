export const FETCH_NEWS = 'FETCH_NEWS';
export function fetchNews() {
	return {
		type: FETCH_NEWS
	};
}
export const FETCHED_NEWS_SUCCESS = 'FETCHED_NEWS_SUCCESS';
export function fetchedNewsSuccess(data) {
	return {
		type: FETCHED_NEWS_SUCCESS,
		data
	};
}
