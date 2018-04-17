import { createSelector } from 'reselect';
import { filterDuplicatesFromArray } from '../../../../utility';

const getAllActiveThreads = state => state.activeThreads;
const getActiveThreadCharacters = createSelector(
	[getAllActiveThreads],
	(threads) => {
		if (!threads || threads.length < 1) {
			return [];
		}
		const characters = threads.map(t => t.character);
		return filterDuplicatesFromArray(characters, 'characterId');
	}
);
export default getActiveThreadCharacters;
