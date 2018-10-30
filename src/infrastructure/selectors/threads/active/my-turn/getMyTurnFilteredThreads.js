import { createSelector } from 'reselect';
import { filterThreadsByTag, getFilteredTag } from '../../../common';
import getMyTurnThreads from './getMyTurnThreads';

const getMyTurnFilteredThreads = createSelector(
	[getMyTurnThreads, getFilteredTag],
	(threads, tag) => filterThreadsByTag(threads, tag)
);
export default getMyTurnFilteredThreads;
