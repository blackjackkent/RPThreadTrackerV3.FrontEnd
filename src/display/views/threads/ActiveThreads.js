import React from 'react';
import PropTypes from 'prop-types';
import { useFilteredActiveThreads } from '~/infrastructure/hooks/derived-data';
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
export default ActiveThreads;
