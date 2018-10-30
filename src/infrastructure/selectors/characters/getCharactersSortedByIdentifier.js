import { createSelector } from 'reselect';
import { sortCharacters } from '../../../utility';
import { getAllCharacters } from '../common';

const getCharactersSortedByIdentifier = createSelector(
	[getAllCharacters],
	(characters) => {
		if (!characters.length) {
			return [];
		}
		const sorted = characters.sort(sortCharacters);
		return sorted;
	}
);
export default getCharactersSortedByIdentifier;
