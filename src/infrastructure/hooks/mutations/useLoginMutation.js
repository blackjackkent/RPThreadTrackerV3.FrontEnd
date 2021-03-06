import { useMutation } from 'react-query';
import axios from 'axios';
import cache from '~/infrastructure/cache';
import cacheKeys from '~/infrastructure/constants/cacheKeys';

function useLoginMutation() {
	const loginMutation = useMutation(
		(request) => {
			return axios
				.post(`${API_BASE_URL}api/auth/token`, request)
				.then((res) => Promise.resolve(res.data));
		},
		{
			onSuccess: (data) => {
				cache.set(cacheKeys.ACCESS_TOKEN, data.token.token);
				cache.set(cacheKeys.REFRESH_TOKEN, data.refreshToken.token);
			}
		}
	);
	return {
		submitLogin: loginMutation.mutateAsync,
		...loginMutation
	};
}
export default useLoginMutation;
