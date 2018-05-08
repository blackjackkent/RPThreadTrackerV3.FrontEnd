import { createSelector } from 'reselect';

const getAllTags = state => state.tags;
const getTagsSortedByTagText = createSelector(
	[getAllTags],
	(tags) => {
		if (!tags.length) {
			return [];
		}
		const sorted = tags.sort();
		return sorted;
	}
);
export default getTagsSortedByTagText;
