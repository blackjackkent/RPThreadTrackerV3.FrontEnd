import { createSelector } from 'reselect';
import { sortByObjectProperty } from '../../../utility';

const getAllCharacters = state => state.characters;
const getCharactersSortedByIdentifier = createSelector(
	[getAllCharacters],
	(characters) => {
		if (!characters.length) {
			return [];
		}
		const sorted = sortByObjectProperty(characters, 'urlIdentifier');
		return sorted;
	}
);
export default getCharactersSortedByIdentifier;
