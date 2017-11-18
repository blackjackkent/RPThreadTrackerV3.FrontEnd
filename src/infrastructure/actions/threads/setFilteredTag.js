export const SET_FILTERED_TAG = 'SET_FILTERED_TAG';
export function setFilteredTag(tag) {
	return {
		type: SET_FILTERED_TAG,
		data: tag
	};
}
