import { createSelector } from 'reselect';
import {
	buildThreadDataByPredicate,
	filterThreadsByPublicViewFilter,
	shouldProcessThreads,
	getAllPublicThreads,
	getAllPublicThreadsStatus,
	getPublicThreadFilter
} from '../common';
import filters from '../../constants/filters';

const getPublicThreads = createSelector(
	[getAllPublicThreads, getAllPublicThreadsStatus, getPublicThreadFilter],
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
