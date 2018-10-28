import { createSelector } from 'reselect';
import filters from '../../constants/filters';
import { buildThreadDataByPredicate, shouldProcessThreads } from '../common';

function sortByLastPostDate(a, b) {
	/* istanbul ignore if */
	if (!a.status && !b.status) {
		return 0;
	}
	/* istanbul ignore if */
	if (!a.status) {
		return 1;
	}
	/* istanbul ignore if */
	if (!b.status) {
		return -1;
	}
	return new Date(b.status.lastPostDate) - new Date(a.status.lastPostDate);
}
const getAllActiveThreads = state => state.activeThreads;
const getAllActiveThreadStatus = state => state.activeThreadsStatus;
const getRecentActivity = createSelector(
	[getAllActiveThreads, getAllActiveThreadStatus],
	(threads, threadsStatus) => {
		if (!shouldProcessThreads(threads, threadsStatus)) {
			return [];
		}
		let results = buildThreadDataByPredicate(
			threads,
			threadsStatus,
			filters.MY_TURN,
			true
		);
		results = results.filter(t => t.status || !t.thread.postId);
		results = results.sort(sortByLastPostDate);
		return results.slice(0, 5);
	}
);

export default getRecentActivity;
