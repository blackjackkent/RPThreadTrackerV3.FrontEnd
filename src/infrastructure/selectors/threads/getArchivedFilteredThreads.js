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
const getAllArchivedThreads = state => state.archivedThreads;
const getArchivedFilteredThreads = createSelector(
	[getAllArchivedThreads, filteredCharacterId, filteredTag],
	(threads, characterId, tag) => {
		let result = threads;
		if (characterId) {
			result = result.filter(t => t.character.id === characterId);
		}
		if (tag) {
			result = result.filter(t => t.tags.includes(tag));
		}
		return result;
	}
);
export default getArchivedFilteredThreads;
