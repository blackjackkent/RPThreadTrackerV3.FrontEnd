import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import queryKeys from '~/infrastructure/constants/queryKeys';

function useDeletePublicViewMutation() {
	const queryClient = useQueryClient();
	const deletePublicViewMutation = useMutation(
		(publicView) => {
			return axios.delete(`${API_BASE_URL}api/publicviewmanagement/${publicView.id}`);
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries([queryKeys.PUBLIC_VIEWS]);
			}
		}
	);
	return {
		deletePublicView: deletePublicViewMutation.mutateAsync,
		...deletePublicViewMutation
	};
}
export default useDeletePublicViewMutation;
