import { createSelector } from 'reselect';
import { filterDuplicatesFromArray } from '../../../../utility';

const getArchivedThreads = state => state.archivedThreads;
const getArchivedThreadCharacters = createSelector(
	[getArchivedThreads],
	(threads) => {
		if (!threads || threads.length < 1) {
			return [];
		}
		const characters = threads.map(t => t.character);
		return filterDuplicatesFromArray(characters, 'characterId');
	}
);
export default getArchivedThreadCharacters;
