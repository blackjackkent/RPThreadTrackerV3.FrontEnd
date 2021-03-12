import { useMutation } from 'react-query';
import axios from 'axios';

function useUpdateAccountInfoMutation() {
	const updateAccountInfoMutation = useMutation((request) => {
		return axios
			.put(`${API_BASE_URL}api/user/accountinfo`, request)
			.then((res) => Promise.resolve(res.data));
	});
	return {
		updateAccountInfo: updateAccountInfoMutation.mutateAsync,
		...updateAccountInfoMutation
	};
}
export default useUpdateAccountInfoMutation;
