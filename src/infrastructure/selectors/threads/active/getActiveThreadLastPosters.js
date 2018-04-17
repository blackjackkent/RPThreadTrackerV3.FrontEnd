import { createSelector } from 'reselect';
import { filterDuplicatesFromArray } from '../../../../utility';

const getAllActiveThreadStatus = state => state.activeThreadsStatus;
const getActiveThreadLastPosters = createSelector(
	[getAllActiveThreadStatus],
	(threadsStatus) => {
		if (!threadsStatus || threadsStatus.length < 1) {
			return [];
		}
		const lastPosters = threadsStatus.map(s => s.LastPosterUrlIdentifier);
		return filterDuplicatesFromArray(lastPosters);
	}
);
export default getActiveThreadLastPosters;
