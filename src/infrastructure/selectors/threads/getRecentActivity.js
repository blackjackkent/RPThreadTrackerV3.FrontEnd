import { createSelector } from 'reselect';
import { buildThreadDataByPredicate } from '../common';

function sortByLastPostDate(a, b) {
	return new Date(b.status.lastPostDate) - new Date(a.status.lastPostDate);
}
const getAllActiveThreads = state => state.activeThreads;
const getAllActiveThreadStatus = state => state.activeThreadsStatus;
const getRecentActivity = createSelector(
	[getAllActiveThreads, getAllActiveThreadStatus],
	(threads, threadsStatus) => {
		if (!threads.length || !threadsStatus.length) {
			return [];
		}
		let results = buildThreadDataByPredicate(
			threads,
			threadsStatus,
			s => s.isCallingCharactersTurn && !s.isQueued
		);
		results = results.sort(sortByLastPostDate);
		return results.slice(0, 5);
	}
);

export default getRecentActivity;
