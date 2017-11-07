import { createSelector } from 'reselect';

const getThreads = state => state.threads;
const getMyTurnThreadsCount = createSelector(
	[getThreads],
	threads => threads.filter(t => t.isMyTurn && !t.isArchived && !t.markedQueued).length
);
export default getMyTurnThreadsCount;
