import { createSelector } from 'reselect';

const getThreads = state => state.threads;
const getQueuedThreads = createSelector(
	[getThreads],
	threads => threads.filter(t => !t.isArchived && t.markedQueued)
);
export default getQueuedThreads;
