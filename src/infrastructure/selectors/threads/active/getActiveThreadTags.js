
import { createSelector } from 'reselect';
import { flattenArrayOfArrays, filterDuplicatesFromArray } from '../../../../utility';

const getAllActiveThreads = state => state.activeThreads;
const getActiveThreadTags = createSelector(
	[getAllActiveThreads],
	(threads) => {
		if (!threads.length) {
			return [];
		}
		const tagArrays = threads.map(t => t.threadTags);
		const flattened = flattenArrayOfArrays(tagArrays);
		const filtered = filterDuplicatesFromArray(flattened, 'tagText');
		return filtered;
	}
);
export default getActiveThreadTags;
