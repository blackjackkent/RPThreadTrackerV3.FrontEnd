import { filterDuplicatesFromArray } from './';

const getCharactersFromThreadList = (threads) => {
	if (!threads || threads.length < 1) {
		return [];
	}
	const characters = threads.map(t => t.thread.character);
	return filterDuplicatesFromArray(characters, 'characterId');
};
export default getCharactersFromThreadList;
