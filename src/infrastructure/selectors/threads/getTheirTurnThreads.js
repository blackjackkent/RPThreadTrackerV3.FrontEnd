import { createSelector } from 'reselect';

const getThreads = state => state.threads;
const getTheirTurnThreads = createSelector(
	[getThreads],
	threads => threads.filter(t => !t.isMyTurn && !t.isArchived && !t.markedQueued)
);
export default getTheirTurnThreads;
