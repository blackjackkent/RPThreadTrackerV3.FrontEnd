import { createSelector } from 'reselect';

const getThreads = state => state.threads;
const getArchivedThreads = createSelector(
	[getThreads],
	threads => threads.filter(t => t.isArchived)
);
export default getArchivedThreads;
