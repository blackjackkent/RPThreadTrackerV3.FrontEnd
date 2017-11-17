import { createSelector } from 'reselect';

const filteredCharacterId = (state) => {
	if (state.threadFilter) {
		return state.threadFilter.filteredCharacterId;
	}
	return null;
};
const getAllArchivedThreads = state => state.archivedThreads;
const getArchivedFilteredThreads = createSelector(
	[getAllArchivedThreads, filteredCharacterId],
	(threads, characterId) => {
		let result = threads;
		if (characterId) {
			result = result.filter(t => t.characterId === characterId);
		}
		return result;
	}
);
export default getArchivedFilteredThreads;
