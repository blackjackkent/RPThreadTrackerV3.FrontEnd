import { createSelector } from 'reselect';
import {
	buildThreadDataByPredicate,
	shouldProcessThreads,
	getAllActiveThreads,
	getAllActiveThreadStatus
} from '../../../common';
import filters from '../../../../constants/filters';

const getMyTurnThreads = createSelector(
	[getAllActiveThreads, getAllActiveThreadStatus],
	(threads, threadsStatus) => {
		if (!shouldProcessThreads(threads, threadsStatus)) {
			return [];
		}
		return buildThreadDataByPredicate(threads, threadsStatus, filters.MY_TURN, true);
	}
);
export default getMyTurnThreads;
