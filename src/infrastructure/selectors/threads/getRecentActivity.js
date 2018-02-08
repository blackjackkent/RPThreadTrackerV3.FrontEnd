import { createSelector } from 'reselect';

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
		let results = [];
		const statuses = threadsStatus.filter(s => s.IsCallingCharactersTurn && !s.IsQueued);
		results = results.concat(statuses.map((s) => {
			const thread = threads.find(t => t.postId === s.PostId);
			return { thread, status: s };
		}));
		results = results.sort(sortByLastPostDate);
		return results.slice(0, 5);
	}
);

export default getRecentActivity;
