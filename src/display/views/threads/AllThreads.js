import React from 'react';
import filters from '~/infrastructure/constants/filters';
import getAllThreadsColumns from './components/_allThreadsColumns';
import ActiveThreads from './ActiveThreads';

const AllThreads = () => {
	return (
		<ActiveThreads filter={filters.ALL} getColumns={getAllThreadsColumns} isAllThreadsView />
	);
};
export default AllThreads;
