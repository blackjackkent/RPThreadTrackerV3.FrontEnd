import { createSelector } from 'reselect';

const getThreads = state => state.threads;
const getAllThreadsCount = createSelector(
	[getThreads],
	threads => threads.filter(t => !t.isArchived).length
);
export default getAllThreadsCount;
