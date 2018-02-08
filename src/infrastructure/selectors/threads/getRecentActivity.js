import { createSelector } from 'reselect';

function sortByLastPostDate(a, b) {
	return new Date(b.lastPostDate) - new Date(a.lastPostDate);
}
const getAllActiveThreads = state => state.activeThreads;
const getAllActiveThreadStatus = state => state.activeThreadsStatus;
const getRecentActivity = createSelector(
	[getAllActiveThreads, getAllActiveThreadStatus],
	(threads, threadsStatus) => {
		if (!threads.length || !threadsStatus.length) {
			return [];
		}
		let statuses = threadsStatus.filter(s =>
			s && s.IsCallingCharactersTurn && !s.IsQueued && s.lastPostDate != null);
		statuses = statuses.sort(sortByLastPostDate);
		return statuses.map((s) => {
			const thread = threads.find(t => t.postId === s.PostId);
			return { thread, status: s };
		});
	}
);

export default getRecentActivity;
