import React from 'react';
import PropTypes from 'prop-types';
import filters from '~/infrastructure/constants/filters';
import getDefaultColumns from './components/_columns';
import getAllThreadsColumns from './components/_allThreadsColumns';
import getArchiveColumns from './components/_archiveColumns';
import getQueueColumns from './components/_queueColumns';
import { useArchivedThreads, useFilteredActiveThreads } from '~/infrastructure/hooks/derived-data';
import ThreadTableWrapper from './components/ThreadTableWrapper';

const propTypes = {
	filter: PropTypes.func.isRequired,
	getColumns: PropTypes.func.isRequired,
	isQueuedView: PropTypes.bool,
	isAllThreadsView: PropTypes.bool
};
const defaultProps = {
	isQueuedView: false,
	isAllThreadsView: false
};
const ActiveThreads = ({ filter, getColumns, isQueuedView, isAllThreadsView }) => {
	const { filteredThreads, isThreadsLoading, refreshThreads } = useFilteredActiveThreads(filter);
	return (
		<ThreadTableWrapper
			threadsWithStatus={filteredThreads}
			isLoading={isThreadsLoading}
			getColumns={getColumns}
			refreshThreads={refreshThreads}
			isQueuedView={isQueuedView}
			isAllThreadsView={isAllThreadsView}
		/>
	);
};
ActiveThreads.defaultProps = defaultProps;
ActiveThreads.propTypes = propTypes;

export const AllThreads = () => {
	return (
		<ActiveThreads filter={filters.ALL} getColumns={getAllThreadsColumns} isAllThreadsView />
	);
};

export const MyTurnThreads = () => {
	return <ActiveThreads filter={filters.MY_TURN} getColumns={getDefaultColumns} />;
};

export const TheirTurnThreads = () => {
	return <ActiveThreads filter={filters.THEIR_TURN} getColumns={getDefaultColumns} />;
};

export const QueuedThreads = () => {
	return <ActiveThreads filter={filters.QUEUED} getColumns={getQueueColumns} isQueuedView />;
};

export const ArchivedThreads = () => {
	const { filteredThreads, isThreadsLoading, refreshThreads } = useArchivedThreads();
	return (
		<ThreadTableWrapper
			threadsWithStatus={filteredThreads}
			isLoading={isThreadsLoading}
			getColumns={getArchiveColumns}
			refreshThreads={refreshThreads}
			isArchivedView
		/>
	);
};
