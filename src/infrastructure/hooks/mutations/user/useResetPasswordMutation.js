import { useMutation } from 'react-query';
import axios from 'axios';

function useResetPasswordMutation() {
	const resetPasswordMutation = useMutation((request) => {
		return axios
			.post(`${API_BASE_URL}api/auth/resetpassword`, request)
			.then((res) => Promise.resolve(res.data))
			.catch((res) => {
				throw new Error(res.response.data);
			});
	});
	return {
		resetPassword: resetPasswordMutation.mutateAsync,
		...resetPasswordMutation
	};
}
export default useResetPasswordMutation;
