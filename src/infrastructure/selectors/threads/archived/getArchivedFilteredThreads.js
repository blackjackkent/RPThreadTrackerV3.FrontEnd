import { createSelector } from 'reselect';
import { filterThreadsByTag } from '../../common';

const filteredTag = state =>
	(state.threadFilter ? state.threadFilter.filteredTag : null);
const getAllArchivedThreads = state => state.archivedThreads;
const getArchivedFilteredThreads = createSelector(
	[getAllArchivedThreads, filteredTag],
	(threads, tag) => {
		if (!threads.length) {
			return [];
		}
		const results = [].concat(threads.map(t => ({ thread: t, status: null })));
		return filterThreadsByTag(results, tag);
	}
);
export default getArchivedFilteredThreads;
