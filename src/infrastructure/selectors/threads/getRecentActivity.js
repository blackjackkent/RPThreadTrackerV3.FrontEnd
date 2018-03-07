import { createSelector } from 'reselect';
import { buildThreadDataByPredicate } from '../common';

function sortByLastPostDate(a, b) {
	return new Date(b.status.LastPostDate) - new Date(a.status.LastPostDate);
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
			s => s.IsCallingCharactersTurn && !s.IsQueued
		);
		results = results.sort(sortByLastPostDate);
		return results.slice(0, 5);
	}
);

export default getRecentActivity;
