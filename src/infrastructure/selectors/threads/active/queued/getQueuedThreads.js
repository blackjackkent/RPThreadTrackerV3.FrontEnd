import { createSelector } from 'reselect';
import {
	buildThreadDataByPredicate,
	shouldProcessThreads,
	getAllActiveThreads,
	getAllActiveThreadStatus
} from '../../../common';
import filters from '../../../../constants/filters';

const getQueuedThreads = createSelector(
	[getAllActiveThreads, getAllActiveThreadStatus],
	(threads, threadsStatus) => {
		if (!shouldProcessThreads(threads, threadsStatus)) {
			return [];
		}
		return buildThreadDataByPredicate(threads, threadsStatus, filters.QUEUED);
	}
);
export default getQueuedThreads;
