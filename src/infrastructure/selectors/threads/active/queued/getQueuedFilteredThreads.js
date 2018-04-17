import { createSelector } from 'reselect';
import { filterThreadsByTag, buildThreadDataByPredicate } from '../../../common';

const filteredTag = state =>
	(state.threadFilter ? state.threadFilter.filteredTag : null);
const getAllActiveThreads = state => state.activeThreads;
const getAllActiveThreadStatus = state => state.activeThreadsStatus;
const getQueuedFilteredThreads = createSelector(
	[getAllActiveThreads, getAllActiveThreadStatus, filteredTag],
	(threads, threadsStatus, tag) => {
		if (!threads.length || !threadsStatus.length) {
			return [];
		}
		const results = buildThreadDataByPredicate(threads, threadsStatus, s => s.IsQueued);
		return filterThreadsByTag(results, tag);
	}
);
export default getQueuedFilteredThreads;
