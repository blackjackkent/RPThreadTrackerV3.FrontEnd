import { useEffect, useState } from 'react';
import { filterDuplicatesFromArray } from '~/utility';

function useThreadListCharacters(threadsWithStatus) {
	const [characters, setCharacters] = useState([]);

	const getCharactersFromThreads = (threads) => {
		const characterList = threads.map((t) => t.thread.character);
		return filterDuplicatesFromArray(characterList, 'characterId');
	};

	useEffect(() => {
		if (!threadsWithStatus.length) {
			setCharacters([]);
			return;
		}
		setCharacters(getCharactersFromThreads(threadsWithStatus));
	}, [threadsWithStatus]);
	return characters;
}
export default useThreadListCharacters;
