import { useEffect, useState } from 'react';
import { filterDuplicatesFromArray, flattenArrayOfArrays, sortTags } from '~/utility';

function useThreadFilterData(threadsWithStatus) {
	const [tags, setTags] = useState([]);
	const [characters, setCharacters] = useState([]);
	const [partners, setPartners] = useState([]);
	const [lastPosters, setLastPosters] = useState([]);

	const getTagsFromThreads = (threads) => {
		const tagArrays = threads.map((t) => t.thread.threadTags);
		const flattened = flattenArrayOfArrays(tagArrays);
		const filtered = filterDuplicatesFromArray(flattened, 'tagText');
		filtered.sort(sortTags);
		return filtered;
	};
	const getCharactersFromThreads = (threads) => {
		const characterList = threads.map((t) => t.thread.character);
		return filterDuplicatesFromArray(characterList, 'characterId');
	};
	const getPartnersFromThreads = (threads) => {
		const partnerList = threads.map((t) => t.thread.partnerUrlIdentifier);
		return filterDuplicatesFromArray(partnerList);
	};
	const getLastPostersFromThreads = (threads) => {
		const lastPosterList = threads.map((s) => s.status?.lastPosterUrlIdentifier);
		return filterDuplicatesFromArray(lastPosterList);
	};

	useEffect(() => {
		if (!threadsWithStatus.length) {
			setTags([]);
			setCharacters([]);
			setPartners([]);
			setLastPosters([]);
			return;
		}
		setTags(getTagsFromThreads(threadsWithStatus));
		setCharacters(getCharactersFromThreads(threadsWithStatus));
		setPartners(getPartnersFromThreads(threadsWithStatus));
		setLastPosters(getLastPostersFromThreads(threadsWithStatus));
	}, [threadsWithStatus]);
	return { tags, characters, partners, lastPosters };
}
export default useThreadFilterData;
