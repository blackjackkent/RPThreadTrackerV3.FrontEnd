import { createSelector } from 'reselect';
import { buildThreadDataByPredicate } from '../../common';

const getAllActiveThreads = state => state.activeThreads;
const getAllActiveThreadsStatus = state => state.activeThreadsStatus;
const getActiveThreadsForDisplay = createSelector(
	[getAllActiveThreads, getAllActiveThreadsStatus],
	(threads, threadsStatus) => {
		if (!threads.length || !threadsStatus.length) {
			return [];
		}
		return buildThreadDataByPredicate(
			threads,
			threadsStatus,
			s => s,
			false
		);
	}
);
export default getActiveThreadsForDisplay;
