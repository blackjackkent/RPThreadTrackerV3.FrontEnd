import { createSelector } from 'reselect';
import {
	buildThreadDataByPredicate,
	filterThreadsByPublicViewFilter,
	filterPublicStatusesByTurnFilter,
	shouldProcessThreads,
	getAllPublicThreads,
	getAllPublicThreadStatus,
	getPublicThreadFilter,
	getPublicThreadsView
} from '../common';
import filters from '../../constants/filters';

const getPublicThreads = createSelector(
	[getAllPublicThreads, getAllPublicThreadStatus, getPublicThreadFilter, getPublicThreadsView],
	(threads, threadsStatus, filter, view) => {
		if (!shouldProcessThreads(threads, threadsStatus)) {
			return [];
		}
		const filteredStatuses = filterPublicStatusesByTurnFilter(threadsStatus, threads, view);
		const threadData = buildThreadDataByPredicate(threads, filteredStatuses, filters.ALL, true);
		return filterThreadsByPublicViewFilter(threadData, filter);
	}
);
export default getPublicThreads;
