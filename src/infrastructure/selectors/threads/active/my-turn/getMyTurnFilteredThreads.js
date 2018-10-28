import { createSelector } from 'reselect';
import { filterThreadsByTag, buildThreadDataByPredicate, shouldProcessThreads } from '../../../common';

const filteredTag = state => (state.threadFilter ? state.threadFilter.filteredTag : null);
const getAllActiveThreads = state => state.activeThreads;
const getAllActiveThreadStatus = state => state.activeThreadsStatus;
const getMyTurnFilteredThreads = createSelector(
	[getAllActiveThreads, getAllActiveThreadStatus, filteredTag],
	(threads, threadsStatus, tag) => {
		if (!shouldProcessThreads(threads, threadsStatus)) {
			return [];
		}
		const results = buildThreadDataByPredicate(
			threads,
			threadsStatus,
			s => s.isCallingCharactersTurn && !s.isQueued,
			true
		);
		return filterThreadsByTag(results, tag);
	}
);
export default getMyTurnFilteredThreads;
