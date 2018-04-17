import { filterDuplicatesFromArray, flattenArrayOfArrays } from './';

const getTagsFromThreadList = (threads) => {
	if (!threads || threads.length < 1) {
		return [];
	}
	const tags = threads.map((t) => {
		if (!t.thread.threadTags) {
			return [];
		}
		return t.thread.threadTags;
	});
	return filterDuplicatesFromArray(flattenArrayOfArrays(tags));
};
export default getTagsFromThreadList;
