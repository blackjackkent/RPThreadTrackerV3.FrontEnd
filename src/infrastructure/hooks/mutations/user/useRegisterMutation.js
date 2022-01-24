import { useMutation } from 'react-query';
import axios from 'axios';

function useRegisterMutation() {
	const registerMutation = useMutation((request) => {
		return axios
			.post(`${API_BASE_URL}api/auth/register`, request)
			.then((res) => Promise.resolve(res.data));
	});
	return {
		submitUserRegistration: registerMutation.mutateAsync,
		...registerMutation
	};
}
export default useRegisterMutation;
