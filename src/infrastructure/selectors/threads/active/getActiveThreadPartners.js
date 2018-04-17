import { createSelector } from 'reselect';
import { filterDuplicatesFromArray } from '../../../../utility';

const getAllActiveThreads = state => state.activeThreads;
const getActiveThreadPartners = createSelector(
	[getAllActiveThreads],
	(threads) => {
		if (!threads || threads.length < 1) {
			return [];
		}
		const partners = threads.map(t => t.partnerUrlIdentifier);
		return filterDuplicatesFromArray(partners);
	}
);
export default getActiveThreadPartners;
