import { createSelector } from 'reselect';
import { filterThreadsByTag, getFilteredTag } from '../../../common';
import getTheirTurnThreads from './getTheirTurnThreads';

const getTheirTurnFilteredThreads = createSelector(
	[getTheirTurnThreads, getFilteredTag],
	(threads, tag) => filterThreadsByTag(threads, tag)
);
export default getTheirTurnFilteredThreads;
