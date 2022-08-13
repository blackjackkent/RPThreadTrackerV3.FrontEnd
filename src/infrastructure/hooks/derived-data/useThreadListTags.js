import { useEffect, useState } from 'react';
import { filterDuplicatesFromArray, flattenArrayOfArrays, sortTags } from '~/utility';

function useThreadListTags(threadsWithStatus) {
	const [tags, setTags] = useState([]);

	const getTagsFromThreads = (threads) => {
		const tagArrays = threads.map((t) => t.thread.threadTags);
		const flattened = flattenArrayOfArrays(tagArrays);
		const filtered = filterDuplicatesFromArray(flattened, 'tagText');
		filtered.sort(sortTags);
		return filtered;
	};

	useEffect(() => {
		if (!threadsWithStatus.length) {
			setTags([]);
			return;
		}
		setTags(getTagsFromThreads(threadsWithStatus));
	}, [threadsWithStatus]);
	return tags;
}
export default useThreadListTags;
