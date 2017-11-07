import { createSelector } from 'reselect';

const getThreads = state => state.threads;
const getQueuedThreadsCount = createSelector(
	[getThreads],
	threads => threads.filter(t => !t.isArchived && t.markedQueued).length
);
export default getQueuedThreadsCount;
