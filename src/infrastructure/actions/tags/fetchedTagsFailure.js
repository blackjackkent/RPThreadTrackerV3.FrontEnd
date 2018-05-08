export const FETCHED_TAGS_FAILURE = 'FETCHED_TAGS_FAILURE';
export function fetchedTagsFailure(data) {
	return {
		type: FETCHED_TAGS_FAILURE,
		data
	};
}
