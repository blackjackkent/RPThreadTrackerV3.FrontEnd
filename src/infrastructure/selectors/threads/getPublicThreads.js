import { createSelector } from 'reselect';
import { buildThreadDataByPredicate, filterThreadsByPublicViewFilter } from '../common';

const publicThreadFilter = state => state.publicThreadFilter;
const getAllPublicThreads = state => state.publicThreads.threads;
const getAllPublicThreadsStatus = state => state.publicThreadsStatus;
const getPublicThreads = createSelector(
	[getAllPublicThreads, getAllPublicThreadsStatus, publicThreadFilter],
	(threads, threadsStatus, filter) => {
		if (!threads.length || !threadsStatus.length) {
			return [];
		}
		const threadData = buildThreadDataByPredicate(
			threads,
			threadsStatus,
			s => s,
			true
		);
		return filterThreadsByPublicViewFilter(threadData, filter);
	}
);
export default getPublicThreads;
