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
		if (!threads.length) {
			return [];
		}
		let results = [];
		results = results.concat(threads.map(t => ({ thread: t, status: null })));
		if (characterId) {
			results = results.filter(t => t.thread.characterId === characterId);
		}
		if (tag) {
			results = results.filter(t => t.thread.tags && t.thread.tags.includes(tag));
		}
		return results;
	}
);
export default getArchivedFilteredThreads;
