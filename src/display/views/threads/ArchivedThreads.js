import React from 'react';
import { useArchivedThreads } from '~/infrastructure/hooks/derived-data';
import getArchiveColumns from './components/_archiveColumns';
import ThreadTableWrapper from './components/ThreadTableWrapper';

const ArchivedThreads = () => {
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
export default ArchivedThreads;
