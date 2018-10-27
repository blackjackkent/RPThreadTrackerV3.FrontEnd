import { createSelector } from 'reselect';
import filters from '../../../../constants/filters';
import { filterThreadsByTag, buildThreadDataByPredicate, shouldProcessThreads } from '../../../common';

const filteredTag = state => (state.threadFilter ? state.threadFilter.filteredTag : null);
const getAllActiveThreads = state => state.activeThreads;
const getAllActiveThreadStatus = state => state.activeThreadsStatus;
const getAllActiveFilteredThreads = createSelector(
	[getAllActiveThreads, getAllActiveThreadStatus, filteredTag],
	(threads, threadsStatus, tag) => {
		if (!shouldProcessThreads(threads, threadsStatus)) {
			return [];
		}
		const results = buildThreadDataByPredicate(
			threads,
			threadsStatus,
			filters.ALL,
			true
		);
		return filterThreadsByTag(results, tag);
	}
);
export default getAllActiveFilteredThreads;
