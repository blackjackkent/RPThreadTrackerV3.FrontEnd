import { useMutation } from 'react-query';
import axios from 'axios';

function useChangePasswordMutation() {
	const changePasswordMutation = useMutation((request) => {
		return axios
			.put(`${API_BASE_URL}api/user/password`, request)
			.then((res) => Promise.resolve(res.data));
	});
	return {
		changePassword: changePasswordMutation.mutateAsync,
		...changePasswordMutation
	};
}
export default useChangePasswordMutation;
