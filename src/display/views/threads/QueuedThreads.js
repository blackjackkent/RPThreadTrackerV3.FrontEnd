import React from 'react';
import filters from '~/infrastructure/constants/filters';
import getQueueColumns from './components/_queueColumns';
import ActiveThreads from './ActiveThreads';

const QueuedThreads = () => {
	return <ActiveThreads filter={filters.QUEUED} getColumns={getQueueColumns} isQueuedView />;
};
export default QueuedThreads;
