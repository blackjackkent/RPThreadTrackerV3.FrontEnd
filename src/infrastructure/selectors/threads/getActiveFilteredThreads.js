import { createSelector } from 'reselect';
import getAllActiveThreads from './getAllActiveThreads';

const getFilteredCharacterId = state => state.threadFilter ? state.threadFilter.filteredCharacterId : null;
const getActiveFilteredThreads = createSelector(
	[getAllActiveThreads, getFilteredCharacterId],
	(threads, filteredCharacterId) => {
		let result = threads;
		if (filteredCharacterId) {
			result = result.filter(t => t.characterId === filteredCharacterId);
		}
		return result;
	}
);
export default getActiveFilteredThreads;
