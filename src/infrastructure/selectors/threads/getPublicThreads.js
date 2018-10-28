import { createSelector } from 'reselect';
import { buildThreadDataByPredicate, filterThreadsByPublicViewFilter, shouldProcessThreads } from '../common';
import filters from '../../constants/filters';

const publicThreadFilter = state => state.publicThreadFilter;
const getAllPublicThreads = state => state.publicThreads.threads;
const getAllPublicThreadsStatus = state => state.publicThreadsStatus;
const getPublicThreads = createSelector(
	[getAllPublicThreads, getAllPublicThreadsStatus, publicThreadFilter],
	(threads, threadsStatus, filter) => {
		if (!shouldProcessThreads(threads, threadsStatus)) {
			return [];
		}
		const threadData = buildThreadDataByPredicate(
			threads,
			threadsStatus,
			filters.ALL,
			true
		);
		return filterThreadsByPublicViewFilter(threadData, filter);
	}
);
export default getPublicThreads;
