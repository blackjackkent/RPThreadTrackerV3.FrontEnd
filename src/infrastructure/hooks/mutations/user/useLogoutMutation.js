import { useMutation } from 'react-query';
import axios from 'axios';

function useLogoutMutation() {
	const logoutMutation = useMutation((refreshToken) => {
		return axios.post(`${API_BASE_URL}api/auth/revoke`, {
			refreshToken
		});
	});
	return {
		submitLogout: logoutMutation.mutateAsync,
		...logoutMutation
	};
}
export default useLogoutMutation;
