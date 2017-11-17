import { createSelector } from 'reselect';

const getAllActiveThreads = state => state.activeThreads;
const getQueuedThreads = createSelector(
	[getAllActiveThreads],
	threads => threads.filter(t => t.markedQueued)
);
export default getQueuedThreads;
