export const FETCHED_NEWS_SUCCESS = 'FETCHED_NEWS_SUCCESS';
export function fetchedNewsSuccess(data) {
	return {
		type: FETCHED_NEWS_SUCCESS,
		data
	};
}
