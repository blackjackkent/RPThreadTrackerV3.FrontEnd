import { createSelector } from 'reselect';
import { filterDuplicatesFromArray } from '../../../../utility';
import { getAllArchivedThreadStatus } from '../../common';

const getArchivedThreadLastPosters = createSelector(
	[getAllArchivedThreadStatus],
	(threadsStatus) => {
		if (!threadsStatus || threadsStatus.length < 1) {
			return [];
		}
		const lastPosters = threadsStatus.map(s => s.lastPosterUrlIdentifier);
		return filterDuplicatesFromArray(lastPosters);
	}
);
export default getArchivedThreadLastPosters;
