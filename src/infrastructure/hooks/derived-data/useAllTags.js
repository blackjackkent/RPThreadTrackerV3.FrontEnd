import { useMemo } from 'react';
import filters from '~/infrastructure/constants/filters';
import { useArchivedThreads, useFilteredActiveThreads, useThreadListTags } from '.';

const useAllTags = () => {
	const {
		filteredThreads: allActiveThreads,
		isThreadsLoading: isActiveThreadsLoading
	} = useFilteredActiveThreads(filters.ALL);
	const {
		filteredThreads: allArchivedThreads,
		isThreadsLoading: isArchivedThreadsLoading
	} = useArchivedThreads();
	const allThreads = useMemo(() => allActiveThreads.concat(allArchivedThreads), [
		allActiveThreads,
		allArchivedThreads
	]);
	const isLoading = isActiveThreadsLoading || isArchivedThreadsLoading;
	const tags = useThreadListTags(allThreads);
	const tagTextValues = useMemo(() => tags.map((t) => t.tagText), [tags]);
	return { tags, tagTextValues, isLoading };
};
export default useAllTags;
