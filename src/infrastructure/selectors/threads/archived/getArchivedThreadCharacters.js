import { createSelector } from 'reselect';
import { filterDuplicatesFromArray } from '../../../../utility';
import { getAllArchivedThreads } from '../../common';

const getArchivedThreadCharacters = createSelector(
	[getAllArchivedThreads],
	(threads) => {
		if (!threads || threads.length < 1) {
			return [];
		}
		const characters = threads.map(t => t.character);
		return filterDuplicatesFromArray(characters, 'characterId');
	}
);
export default getArchivedThreadCharacters;
