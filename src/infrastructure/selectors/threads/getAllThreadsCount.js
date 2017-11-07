import { createSelector } from 'reselect'

const getThreads = state => state.threads
const getAllThreadsCount = createSelector(
	[getThreads],
	(threads) => {
		return threads.filter(t => !t.isArchived).length;
	}
);
export default getAllThreadsCount;
