import { createSelector } from 'reselect';
import { filterThreadsByTag, buildThreadDataByPredicate, shouldProcessThreads } from '../../common';

const filteredTag = state => (state.threadFilter ? state.threadFilter.filteredTag : null);
const getAllArchivedThreads = state => state.archivedThreads;
const getAllArchivedThreadStatus = state => state.archivedThreadsStatus;
const getAllArchivedFilteredThreads = createSelector(
	[getAllArchivedThreads, getAllArchivedThreadStatus, filteredTag],
	(threads, threadsStatus, tag) => {
		if (!shouldProcessThreads(threads, threadsStatus)) {
			return [];
		}
		const results = buildThreadDataByPredicate(
			threads,
			threadsStatus,
			s => s,
			true
		);
		return filterThreadsByTag(results, tag);
	}
);
export default getAllArchivedFilteredThreads;
