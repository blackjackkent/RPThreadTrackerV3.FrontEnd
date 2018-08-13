import { createSelector } from 'reselect';
import { buildThreadDataByPredicate } from '../../../common';

const getAllActiveThreads = state => state.activeThreads;
const getAllActiveThreadStatus = state => state.activeThreadsStatus;
const getQueuedThreads = createSelector(
	[getAllActiveThreads, getAllActiveThreadStatus],
	(threads, threadsStatus) => {
		if (!threads.length || !threadsStatus.length) {
			return [];
		}
		return buildThreadDataByPredicate(threads, threadsStatus, s => s && s.isQueued);
	}
);
export default getQueuedThreads;
