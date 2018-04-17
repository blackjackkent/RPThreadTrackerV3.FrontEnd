
import { createSelector } from 'reselect';
import { flattenArrayOfArrays, filterDuplicatesFromArray } from '../../../../utility';

const getArchivedThreads = state => state.archivedThreads;
const getArchivedThreadTags = createSelector(
	[getArchivedThreads],
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
export default getArchivedThreadTags;
