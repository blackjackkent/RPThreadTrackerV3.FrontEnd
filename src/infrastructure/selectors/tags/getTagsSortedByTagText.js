import { createSelector } from 'reselect';
import { getTags } from '../common';

const getTagsSortedByTagText = createSelector([getTags], (tags) => {
	if (!tags.length) {
		return [];
	}
	const sorted = tags.sort();
	return sorted;
});
export default getTagsSortedByTagText;
