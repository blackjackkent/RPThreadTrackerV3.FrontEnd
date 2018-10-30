import { createSelector } from 'reselect';
import { filterThreadsByTag, getFilteredTag } from '../../../common';
import getQueuedThreads from './getQueuedThreads';

const getQueuedFilteredThreads = createSelector(
	[getQueuedThreads, getFilteredTag],
	(threads, tag) => filterThreadsByTag(threads, tag)
);
export default getQueuedFilteredThreads;
