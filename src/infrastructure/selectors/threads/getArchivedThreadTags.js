
import { createSelector } from 'reselect';
import { flattenArrayOfArrays, filterDuplicatesFromArray } from '../../../utility';

const getAllArchivedThreads = state => state.archivedThreads;
const getArchivedThreadTags = createSelector(
	[getAllArchivedThreads],
	(threads) => {
		if (!threads.length) {
			return [];
		}
		const tagArrays = threads.map(t => t.threadTags);
		const flattened = flattenArrayOfArrays(tagArrays);
		const filtered = filterDuplicatesFromArray(flattened);
		return filtered;
	}
);

export default getArchivedThreadTags;
