import { createSelector } from 'reselect';

const getAllActiveThreads = state => state.activeThreads;
const getMyTurnThreads = createSelector(
	[getAllActiveThreads],
	threads => threads.filter(t => t.isMyTurn && !t.markedQueued)
);
export default getMyTurnThreads;
