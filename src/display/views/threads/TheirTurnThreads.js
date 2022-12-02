import React from 'react';
import filters from '~/infrastructure/constants/filters';
import getDefaultColumns from './components/_columns';
import ActiveThreads from './ActiveThreads';

const TheirTurnThreads = () => {
	return <ActiveThreads filter={filters.THEIR_TURN} getColumns={getDefaultColumns} />;
};
export default TheirTurnThreads;
