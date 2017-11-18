import { createSelector } from 'reselect';

const filteredCharacterId = (state) => {
	if (state.threadFilter) {
		return state.threadFilter.filteredCharacterId;
	}
	return null;
};
const filteredTag = (state) => {
	if (state.threadFilter) {
		return state.threadFilter.filteredTag;
	}
	return null;
};
const getAllActiveThreads = state => state.activeThreads;
const getQueuedFilteredThreads = createSelector(
	[getAllActiveThreads, filteredCharacterId, filteredTag],
	(threads, characterId, tag) => {
		let result = threads;
		if (characterId) {
			result = result.filter(t => t.character.id === characterId);
		}
		if (tag) {
			result = result.filter(t => t.tags && t.tags.includes(tag));
		}
		return result.filter(t => t.markedQueued);
	}
);
export default getQueuedFilteredThreads;
