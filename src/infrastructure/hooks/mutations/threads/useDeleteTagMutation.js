import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import queryKeys from '~/infrastructure/constants/queryKeys';

function useDeleteTagMutation() {
	const queryClient = useQueryClient();
	const updateTagMutation = useMutation(
		({ tag }) => {
			return axios
				.delete(`${API_BASE_URL}api/thread/tags/${tag}`)
				.then((res) => Promise.resolve(res.data));
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries([queryKeys.THREADS]);
			}
		}
	);
	return {
		bulkDeleteTag: updateTagMutation.mutateAsync,
		...updateTagMutation
	};
}
export default useDeleteTagMutation;
