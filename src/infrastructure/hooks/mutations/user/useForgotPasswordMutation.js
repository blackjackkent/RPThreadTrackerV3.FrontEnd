import { useMutation } from 'react-query';
import axios from 'axios';

function useForgotPasswordMutation() {
	const forgotPasswordMutation = useMutation((request) => {
		return axios
			.post(`${API_BASE_URL}api/auth/forgotpassword`, request)
			.then((res) => Promise.resolve(res.data))
			.catch((res) => {
				throw new Error(res.response.data);
			});
	});
	return {
		requestPasswordReset: forgotPasswordMutation.mutateAsync,
		...forgotPasswordMutation
	};
}
export default useForgotPasswordMutation;
