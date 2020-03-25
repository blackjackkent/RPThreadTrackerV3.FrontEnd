import { createSelector } from 'reselect';
import { filterDuplicatesFromArray } from '../../../../utility';
import { getAllActiveThreadStatus } from '../../common';

const getActiveThreadLastPosters = createSelector([getAllActiveThreadStatus], (threadsStatus) => {
	if (!threadsStatus || threadsStatus.length < 1) {
		return [];
	}
	const lastPosters = threadsStatus.map((s) => s.lastPosterUrlIdentifier);
	return filterDuplicatesFromArray(lastPosters);
});
export default getActiveThreadLastPosters;
