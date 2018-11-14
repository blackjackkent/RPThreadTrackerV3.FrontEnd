import { createSelector } from 'reselect';
import { filterDuplicatesFromArray } from '../../../../utility';
import { getAllActiveThreads } from '../../common';

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
