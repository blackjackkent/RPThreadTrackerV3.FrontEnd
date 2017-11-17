import { createSelector } from 'reselect';

function sortByLastPostDate(a, b) {
	return new Date(b.lastPostDate) - new Date(a.lastPostDate);
}
const getAllActiveThreads = state => state.activeThreads;
const getRecentActivity = createSelector(
	[getAllActiveThreads],
	(threads) => {
		let filtered = threads.filter(t => t.isMyTurn && !t.markedQueued);
		filtered = filtered.sort(sortByLastPostDate);
		return filtered.slice(0, 5);
	}
);

export default getRecentActivity;
