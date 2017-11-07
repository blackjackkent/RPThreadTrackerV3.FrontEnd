import { createSelector } from 'reselect'

const getThreads = state => state.threads
const getTheirTurnThreadsCount = createSelector(
	[getThreads],
	(threads) => {
		return threads.filter(t => !t.isMyTurn && !t.isArchived && !t.markedQueued).length;
	}
);
export default getTheirTurnThreadsCount;
