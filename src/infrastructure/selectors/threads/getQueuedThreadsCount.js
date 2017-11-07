import { createSelector } from 'reselect'

const getThreads = state => state.threads
const getQueuedThreadsCount = createSelector(
	[getThreads],
	(threads) => {
		return threads.filter(t => !t.isArchived && t.markedQueued).length;
	}
);
export default getQueuedThreadsCount;
