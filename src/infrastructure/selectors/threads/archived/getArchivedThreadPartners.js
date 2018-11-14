import { createSelector } from 'reselect';
import { filterDuplicatesFromArray } from '../../../../utility';
import { getAllArchivedThreads } from '../../common';

const getArchivedThreadPartners = createSelector(
	[getAllArchivedThreads],
	(threads) => {
		if (!threads || threads.length < 1) {
			return [];
		}
		const partners = threads.map(t => t.partnerUrlIdentifier);
		return filterDuplicatesFromArray(partners);
	}
);
export default getArchivedThreadPartners;
