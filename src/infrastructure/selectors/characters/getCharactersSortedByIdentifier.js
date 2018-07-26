import { createSelector } from 'reselect';
import { sortCharacters } from '../../../utility';

const getAllCharacters = state => state.characters;
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
