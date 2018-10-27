import { createSelector } from 'reselect';
import { buildThreadDataByPredicate, shouldProcessThreads } from '../../../common';

const getAllActiveThreads = state => state.activeThreads;
const getAllActiveThreadStatus = state => state.activeThreadsStatus;
const getTheirTurnThreads = createSelector(
	[getAllActiveThreads, getAllActiveThreadStatus],
	(threads, threadsStatus) => {
		if (!shouldProcessThreads(threads, threadsStatus)) {
			return [];
		}
		return buildThreadDataByPredicate(
			threads,
			threadsStatus,
			s => !s.isCallingCharactersTurn && !s.isQueued
		);
	}
);
export default getTheirTurnThreads;
