import { createSelector } from 'reselect';
import { buildThreadDataByPredicate } from '../common';

const getAllPublicThreads = state => state.publicThreads.threads;
const getAllPublicThreadsStatus = state => state.publicThreadsStatus;
const getPublicThreads = createSelector(
	[getAllPublicThreads, getAllPublicThreadsStatus],
	(threads, threadsStatus) => {
		if (!threads.length || !threadsStatus.length) {
			return [];
		}
		return buildThreadDataByPredicate(
			threads,
			threadsStatus,
			s => s,
			true
		);
	}
);
export default getPublicThreads;
