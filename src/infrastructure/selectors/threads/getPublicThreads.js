import { createSelector } from 'reselect';
import {
	buildThreadDataByPredicate,
	filterThreadsByPublicViewFilter,
	shouldProcessThreads,
	getAllPublicThreads,
	getAllPublicThreadStatus,
	getPublicThreadFilter
} from '../common';
import filters from '../../constants/filters';

const getPublicThreads = createSelector(
	[getAllPublicThreads, getAllPublicThreadStatus, getPublicThreadFilter],
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
