import { useMutation } from 'react-query';
import axios from 'axios';

function useLogoutMutation() {
	const loginMutation = useMutation((refreshToken) => {
		return axios.post(`${API_BASE_URL}api/auth/revoke`, {
			refreshToken
		});
	});
	return loginMutation;
}
export default useLogoutMutation;
