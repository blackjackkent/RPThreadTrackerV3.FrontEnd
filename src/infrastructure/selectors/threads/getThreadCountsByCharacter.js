import { createSelector } from 'reselect';

const getAllActiveThreads = state => state.activeThreads;
const getAllCharacters = state => state.characters;
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
