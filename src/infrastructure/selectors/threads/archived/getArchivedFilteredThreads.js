import { createSelector } from 'reselect';
import filters from '../../../constants/filters';
import {
	filterThreadsByTag,
	buildThreadDataByPredicate,
	shouldProcessThreads,
	getAllArchivedThreadStatus,
	getAllArchivedThreads,
	getFilteredTag
} from '../../common';

const getAllArchivedFilteredThreads = createSelector(
	[getAllArchivedThreads, getAllArchivedThreadStatus, getFilteredTag],
	(threads, threadsStatus, tag) => {
		if (!shouldProcessThreads(threads, threadsStatus)) {
			return [];
		}
		const results = buildThreadDataByPredicate(threads, threadsStatus, filters.ALL, true);
		return filterThreadsByTag(results, tag);
	}
);
export default getAllArchivedFilteredThreads;
