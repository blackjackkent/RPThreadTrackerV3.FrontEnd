import { createSelector } from 'reselect';

const getThreads = state => state.threads;
function sortByLastPostDate(a, b) {
	return new Date(b.lastPostDate) - new Date(a.lastPostDate);
}
const getRecentActivity = createSelector(
	[getThreads],
	(threads) => {
		let filtered = threads.filter(t => t.isMyTurn && !t.isArchived && !t.markedQueued);
		filtered = filtered.sort(sortByLastPostDate);
		return filtered.slice(0, 5);
	}
);

export default getRecentActivity;
