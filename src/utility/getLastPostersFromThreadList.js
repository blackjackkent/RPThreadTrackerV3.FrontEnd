import { filterDuplicatesFromArray } from './';

const getLastPostersFromThreadList = (threads) => {
	if (!threads || threads.length < 1) {
		return [];
	}
	const lastPosters = threads.map((t) => {
		if (!t.status) {
			return '';
		}
		return t.status.LastPosterUrlIdentifier;
	});
	return filterDuplicatesFromArray(lastPosters);
};
export default getLastPostersFromThreadList;
