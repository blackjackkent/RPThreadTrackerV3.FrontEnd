import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import queryKeys from '~/infrastructure/constants/queryKeys';

function useUpdateTagMutation() {
	const queryClient = useQueryClient();
	const updateTagMutation = useMutation(
		({ currentTag, replacementTag }) => {
			return axios
				.put(
					`${API_BASE_URL}api/thread/tags?currentTag=${currentTag}&replacementTag=${replacementTag}`,
					{}
				)
				.then((res) => Promise.resolve(res.data));
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries([queryKeys.THREADS]);
			}
		}
	);
	return {
		bulkUpdateTag: updateTagMutation.mutateAsync,
		...updateTagMutation
	};
}
export default useUpdateTagMutation;
