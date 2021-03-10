import { useMutation } from 'react-query';
import axios from 'axios';
import cache from '~/infrastructure/cache';
import cacheKeys from '~/infrastructure/constants/cacheKeys';

function useForgotPasswordMutation() {
	const forgotPasswordMutation = useMutation((request) => {
		return axios
			.post(`${API_BASE_URL}api/auth/forgotpassword`, request)
			.then((res) => Promise.resolve(res.data));
	});
	return {
		requestPasswordReset: forgotPasswordMutation.mutateAsync,
		...forgotPasswordMutation
	};
}
export default useForgotPasswordMutation;
