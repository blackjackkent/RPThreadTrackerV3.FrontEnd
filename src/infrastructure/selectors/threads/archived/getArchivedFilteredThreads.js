import { createSelector } from 'reselect';
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
