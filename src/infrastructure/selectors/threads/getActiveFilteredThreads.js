import { createSelector } from 'reselect';
import getAllActiveThreads from './getAllActiveThreads';

const getFilteredCharacterId = (state) => {
	if (state.threadFilter) {
		return state.threadFilter.filteredCharacterId;
	}
	return null;
};
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
