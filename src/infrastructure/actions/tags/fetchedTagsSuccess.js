export const FETCHED_TAGS_SUCCESS = 'FETCHED_TAGS_SUCCESS';
export function fetchedTagsSuccess(data) {
	return {
		type: FETCHED_TAGS_SUCCESS,
		data
	};
}
