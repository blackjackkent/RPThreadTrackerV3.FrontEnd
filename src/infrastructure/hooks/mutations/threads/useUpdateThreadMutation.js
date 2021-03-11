import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import queryKeys from '~/infrastructure/constants/queryKeys';

function useUpdateThreadMutation() {
	const queryClient = useQueryClient();
	const updateThreadMutation = useMutation(
		(thread) => {
			return axios
				.put(`${API_BASE_URL}api/thread/${thread.threadId}`, thread)
				.then((res) => Promise.resolve(res.data));
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries([queryKeys.THREADS]);
			}
		}
	);
	return {
		updateThread: updateThreadMutation.mutateAsync,
		...updateThreadMutation
	};
}
export default useUpdateThreadMutation;
