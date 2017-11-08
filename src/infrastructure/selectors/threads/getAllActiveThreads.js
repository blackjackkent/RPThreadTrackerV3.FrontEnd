import { createSelector } from 'reselect';

const getThreads = state => state.threads;
const getAllActiveThreads = createSelector(
	[getThreads],
	threads => threads.filter(t => !t.isArchived)
);
export default getAllActiveThreads;
