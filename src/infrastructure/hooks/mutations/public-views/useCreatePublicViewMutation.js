import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import queryKeys from '~/infrastructure/constants/queryKeys';

function useCreatePublicViewMutation() {
	const queryClient = useQueryClient();
	const createPublicViewMutation = useMutation(
		(publicView) => {
			return axios
				.post(`${API_BASE_URL}api/publicviewmanagement`, publicView)
				.then((res) => Promise.resolve(res.data));
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries([queryKeys.PUBLIC_VIEWS]);
			}
		}
	);
	return {
		createPublicView: createPublicViewMutation.mutateAsync,
		isLoading: createPublicViewMutation.isLoading
	};
}
export default useCreatePublicViewMutation;
