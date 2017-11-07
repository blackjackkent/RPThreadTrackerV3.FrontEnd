import { createSelector } from 'reselect'

const getThreads = state => state.threads
const getRecentActivity = createSelector(
	[getThreads],
	(threads) => {
		var filtered = threads.filter(t => t.isMyTurn && !t.isArchived && !t.markedQueued);
		filtered = filtered.sort(function (a, b) {
			return new Date(b.lastPostDate) - new Date(a.lastPostDate);
		});
		return filtered.slice(0, 5);
	}
);
export default getRecentActivity;
