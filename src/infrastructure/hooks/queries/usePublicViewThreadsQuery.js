import { useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import { useEffect } from 'react';
import queryKeys from '~/infrastructure/constants/queryKeys';
import { legacyPublicSlugs, buildLegacyView } from '~/infrastructure/constants/legacyPublicValues';
import { useThreadsStatusMutation } from '../mutations';

function usePublicViewThreadsQuery(slug, username, queryString) {
	const {
		threadsStatus,
		fetchThreadsStatusChunk,
		clearData: resetThreadsStatus,
		isLoading: isThreadsStatusLoading
	} = useThreadsStatusMutation();
	const threadsQuery = useQuery([queryKeys.PUBLIC_VIEW_THREADS, slug], () => {
		if (legacyPublicSlugs.includes(slug) && !username) {
			const legacyView = buildLegacyView(queryString, slug);
			return axios.post(`${API_BASE_URL}api/publicthread`, legacyView).then((res) => {
				return Promise.resolve(res.data);
			});
		}
		return axios.get(`${API_BASE_URL}api/publicthread/${username}/${slug}`).then((res) => {
			return Promise.resolve(res.data);
		});
	});
	const { data: viewData, isLoading: isThreadsLoading } = threadsQuery;
	useEffect(() => {
		if (!viewData?.threads?.length) {
			return;
		}
		resetThreadsStatus();
		const requests = JSON.parse(viewData.threadStatusRequestJson);
		const chunks = [];
		for (let i = 0, j = requests.length; i < j; i += 10) {
			const chunk = requests.slice(i, i + 10);
			chunks.push(chunk);
		}
		chunks.forEach((chunk) => {
			fetchThreadsStatusChunk(chunk);
		});
	}, [viewData, fetchThreadsStatusChunk, resetThreadsStatus]);
	const queryClient = useQueryClient();
	const refreshThreads = () => {
		queryClient.resetQueries([queryKeys.PUBLIC_VIEW_THREADS, slug]);
	};
	return {
		viewData: {
			view: viewData?.view,
			threads: viewData?.threads,
			threadsStatus
		},
		isThreadsLoading,
		isThreadsStatusLoading,
		refreshThreads,
		...threadsQuery
	};
}
export default usePublicViewThreadsQuery;
