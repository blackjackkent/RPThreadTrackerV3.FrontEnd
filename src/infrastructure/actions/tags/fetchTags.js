export const FETCH_TAGS = 'FETCH_TAGS';
export function fetchTags() {
	return {
		type: FETCH_TAGS
	};
}
export const FETCHED_TAGS_FAILURE = 'FETCHED_TAGS_FAILURE';
export function fetchedTagsFailure(data) {
	return {
		type: FETCHED_TAGS_FAILURE,
		data
	};
}
export const FETCHED_TAGS_SUCCESS = 'FETCHED_TAGS_SUCCESS';
export function fetchedTagsSuccess(data) {
	return {
		type: FETCHED_TAGS_SUCCESS,
		data
	};
}
