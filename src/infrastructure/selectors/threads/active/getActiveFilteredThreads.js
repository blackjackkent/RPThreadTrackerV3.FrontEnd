import { createSelector } from 'reselect';
import filters from '../../../constants/filters';
import {
	filterThreadsByTag,
	buildThreadDataByPredicate,
	shouldProcessThreads,
	getAllActiveThreads,
	getAllActiveThreadStatus,
	getFilteredTag
} from '../../common';

const getActiveFilteredThreads = createSelector(
	[getAllActiveThreads, getAllActiveThreadStatus, getFilteredTag],
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
export default getActiveFilteredThreads;
