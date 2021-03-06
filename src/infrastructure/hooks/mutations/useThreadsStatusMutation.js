import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import queryKeys from '~/infrastructure/constants/queryKeys';

function useThreadsStatusMutation(isArchived = false) {
	const queryClient = useQueryClient();
	const threadsStatusMutation = useMutation(
		(request) => {
			return axios
				.post(`${TUMBLR_CLIENT_BASE_URL}api/thread`, request)
				.then((res) => Promise.resolve(res.data));
		},
		{
			onSuccess: (data) => {
				const currentData =
					queryClient.getQueryData([queryKeys.THREADS_STATUS, { isArchived }]) ?? [];
				const updated = currentData.concat(data);
				queryClient.invalidateQueries([queryKeys.THREADS_STATUS, { isArchived }]);
				queryClient.setQueryData([queryKeys.THREADS_STATUS, { isArchived }], updated);
			}
		}
	);
	return {
		fetchThreadsStatusChunk: threadsStatusMutation.mutateAsync,
		...threadsStatusMutation
	};
}
export default useThreadsStatusMutation;
