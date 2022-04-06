import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import cache from '~/infrastructure/cache';
import cacheKeys from '~/infrastructure/constants/cacheKeys';

function useLoginMutation() {
	const queryClient = useQueryClient();
	const loginMutation = useMutation(
		(request) => {
			return axios.post(`${API_BASE_URL}api/auth/token`, request).then((res) => {
				return Promise.resolve(res.data);
			});
		},
		{
			onSuccess: (data) => {
				queryClient.cancelQueries();
				queryClient.invalidateQueries();
				cache.set(cacheKeys.ACCESS_TOKEN, data.token.token);
				cache.set(cacheKeys.REFRESH_TOKEN, data.refreshToken.token);
			}
		}
	);
	return {
		submitLogin: loginMutation.mutate,
		...loginMutation
	};
}
export default useLoginMutation;
