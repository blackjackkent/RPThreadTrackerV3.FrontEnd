import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import queryKeys from '~/infrastructure/constants/queryKeys';

function useCreateThreadMutation() {
	const queryClient = useQueryClient();
	const createThreadMutation = useMutation(
		(thread) => {
			return axios
				.post(`${API_BASE_URL}api/thread`, thread)
				.then((res) => Promise.resolve(res.data));
		},
		{
			onSuccess: (data) => {
				queryClient.setQueryData([queryKeys.THREADS, { id: data.threadId }], data);
			}
		}
	);
	return createThreadMutation;
}
export default useCreateThreadMutation;
