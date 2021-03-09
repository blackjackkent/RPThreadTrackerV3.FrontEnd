import { useEffect, useState } from 'react';
import filters from '~/infrastructure/constants/filters';
import { useCharactersQuery } from '../queries';
import useFilteredActiveThreads from './useFilteredActiveThreads';

function useCharacterThreadCounts() {
	const allActiveThreads = useFilteredActiveThreads(filters.ALL);
	const { data: characters } = useCharactersQuery();
	const [characterThreadCounts, setCharacterThreadCounts] = useState({});
	useEffect(() => {
		if (!allActiveThreads.length || !characters.length) {
			setCharacterThreadCounts({});
			return;
		}
		const mapping = {};
		characters.forEach((char) => {
			const characterThreads = allActiveThreads.filter(
				(t) => t.thread.characterId === char.characterId
			);
			mapping[char.characterId] = characterThreads.length;
		});
		setCharacterThreadCounts(mapping);
	}, [allActiveThreads, characters]);
	return characterThreadCounts;
}
export default useCharacterThreadCounts;
