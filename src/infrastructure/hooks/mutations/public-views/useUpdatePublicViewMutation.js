import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import queryKeys from '~/infrastructure/constants/queryKeys';

function useUpdatePublicViewMutation() {
	const queryClient = useQueryClient();
	const updatePublicViewMutation = useMutation(
		(publicView) => {
			return axios
				.put(`${API_BASE_URL}api/publicviewmanagement/${publicView.id}`, publicView)
				.then((res) => Promise.resolve(res.data));
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries([queryKeys.PUBLIC_VIEWS]);
			}
		}
	);
	return {
		updatePublicView: updatePublicViewMutation.mutateAsync,
		...updatePublicViewMutation
	};
}
export default useUpdatePublicViewMutation;
