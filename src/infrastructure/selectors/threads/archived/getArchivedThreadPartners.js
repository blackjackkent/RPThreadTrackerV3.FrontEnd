import { createSelector } from 'reselect';
import { filterDuplicatesFromArray } from '../../../../utility';

const getArchivedThreads = state => state.archivedThreads;
const getArchivedThreadPartners = createSelector(
	[getArchivedThreads],
	(threads) => {
		if (!threads || threads.length < 1) {
			return [];
		}
		const partners = threads.map(t => t.partnerUrlIdentifier);
		return filterDuplicatesFromArray(partners);
	}
);
export default getArchivedThreadPartners;
