import { createSelector } from 'reselect';
import getMyTurnThreads from './active/my-turn/getMyTurnThreads';

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
const getRecentActivity = createSelector(
	[getMyTurnThreads],
	(threads) => {
		let results = threads.filter(t => t.thread.status || !t.thread.postId);
		results = results.sort(sortByLastPostDate);
		return results.slice(0, 5);
	}
);

export default getRecentActivity;
