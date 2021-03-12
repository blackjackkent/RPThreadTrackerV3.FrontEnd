import { useMutation } from 'react-query';
import axios from 'axios';

function useDeleteAccountMutation() {
	const deleteAccountMutation = useMutation((request) => {
		return axios
			.delete(`${API_BASE_URL}api/user`, request)
			.then((res) => Promise.resolve(res.data));
	});
	return {
		deleteAccount: deleteAccountMutation.mutateAsync,
		...deleteAccountMutation
	};
}
export default useDeleteAccountMutation;
