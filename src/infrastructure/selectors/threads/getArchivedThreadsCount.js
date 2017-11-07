import { createSelector } from 'reselect'

const getThreads = state => state.threads
const getArchivedThreadsCount = createSelector(
	[getThreads],
	(threads) => {
		return threads.filter(t => t.isArchived).length;
	}
);
export default getArchivedThreadsCount;
