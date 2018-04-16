import { filterDuplicatesFromArray } from './';

const getPartnersFromThreadList = (threads) => {
	if (!threads || threads.length < 1) {
		return [];
	}
	const partners = threads.map((t) => {
		if (!t.thread) {
			return '';
		}
		return t.thread.partnerUrlIdentifier;
	});
	return filterDuplicatesFromArray(partners);
};
export default getPartnersFromThreadList;
