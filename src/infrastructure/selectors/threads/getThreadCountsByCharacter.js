import { createSelector } from 'reselect';
import { getAllCharacters, getAllActiveThreads } from '../common/commonState';

const getTheirTurnThreads = createSelector(
	[getAllActiveThreads, getAllCharacters],
	(threads, characters) => {
		if (!threads.length || !characters.length) {
			return {};
		}
		const mapping = {};
		characters.forEach((char) => {
			const characterThreads = threads.filter(t => t.characterId === char.characterId);
			mapping[char.characterId] = characterThreads.length;
		});
		return mapping;
	}
);
export default getTheirTurnThreads;
