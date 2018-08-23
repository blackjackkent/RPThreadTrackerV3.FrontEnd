import { createSelector } from 'reselect';
import { filterThreadsByTag, buildThreadDataByPredicate } from '../../common';

const filteredTag = state => (state.threadFilter ? state.threadFilter.filteredTag : null);
const getAllArchivedThreads = state => state.archivedThreads;
const getAllArchivedThreadStatus = state => state.archivedThreadsStatus;
const getAllArchivedFilteredThreads = createSelector(
	[getAllArchivedThreads, getAllArchivedThreadStatus, filteredTag],
	(threads, threadsStatus, tag) => {
		if (!threads.length || !threadsStatus.length) {
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
