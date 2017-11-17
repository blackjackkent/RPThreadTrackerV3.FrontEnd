import { createSelector } from 'reselect';

const filteredCharacterId = (state) => {
	if (state.threadFilter) {
		return state.threadFilter.filteredCharacterId;
	}
	return null;
};
const getAllActiveThreads = state => state.activeThreads;
const getQueuedFilteredThreads = createSelector(
	[getAllActiveThreads, filteredCharacterId],
	(threads, characterId) => {
		let result = threads;
		if (characterId) {
			result = result.filter(t => t.characterId === characterId);
		}
		return result.filter(t => t.markedQueued);
	}
);
export default getQueuedFilteredThreads;
