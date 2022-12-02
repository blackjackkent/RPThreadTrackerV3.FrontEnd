import React from 'react';
import filters from '~/infrastructure/constants/filters';
import getDefaultColumns from './components/_columns';
import ActiveThreads from './ActiveThreads';

const MyTurnThreads = () => {
	return <ActiveThreads filter={filters.MY_TURN} getColumns={getDefaultColumns} />;
};
export default MyTurnThreads;
