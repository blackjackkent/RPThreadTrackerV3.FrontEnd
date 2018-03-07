import { createSelector } from 'reselect';
import { filterThreadsByTagAndCharacter, buildThreadDataByPredicate } from '../../common';

const filteredCharacterId = state =>
	(state.threadFilter ? state.threadFilter.filteredCharacterId : null);
const filteredTag = state =>
	(state.threadFilter ? state.threadFilter.filteredTag : null);
const getAllActiveThreads = state => state.activeThreads;
const getAllActiveThreadStatus = state => state.activeThreadsStatus;
const getMyTurnFilteredThreads = createSelector(
	[getAllActiveThreads, getAllActiveThreadStatus, filteredCharacterId, filteredTag],
	(threads, threadsStatus, characterId, tag) => {
		if (!threads.length || !threadsStatus.length) {
			return [];
		}
		const results = buildThreadDataByPredicate(
			threads,
			threadsStatus,
			s => s.IsCallingCharactersTurn && !s.IsQueued,
			true
		);
		return filterThreadsByTagAndCharacter(results, characterId, tag);
	}
);
export default getMyTurnFilteredThreads;
