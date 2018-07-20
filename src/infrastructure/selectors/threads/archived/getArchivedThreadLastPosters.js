import { createSelector } from 'reselect';
import { filterDuplicatesFromArray } from '../../../../utility';

const getAllArchivedThreadStatus = state => state.archivedThreadStatus;
const getArchivedThreadLastPosters = createSelector(
	[getAllArchivedThreadStatus],
	(threadsStatus) => {
		if (!threadsStatus || threadsStatus.length < 1) {
			return [];
		}
		const lastPosters = threadsStatus.map(s => s.LastPosterUrlIdentifier);
		return filterDuplicatesFromArray(lastPosters);
	}
);
export default getArchivedThreadLastPosters;
