import { createSelector } from 'reselect';
import { filterThreadsByTagAndCharacter } from '../../common';

const filteredCharacterId = state =>
	(state.threadFilter ? state.threadFilter.filteredCharacterId : null);
const filteredTag = state =>
	(state.threadFilter ? state.threadFilter.filteredTag : null);
const getAllArchivedThreads = state => state.archivedThreads;
const getArchivedFilteredThreads = createSelector(
	[getAllArchivedThreads, filteredCharacterId, filteredTag],
	(threads, characterId, tag) => {
		if (!threads.length) {
			return [];
		}
		const results = [].concat(threads.map(t => ({ thread: t, status: null })));
		return filterThreadsByTagAndCharacter(results, characterId, tag);
	}
);
export default getArchivedFilteredThreads;
