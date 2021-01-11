import { useMutation } from 'react-query';
import axios from 'axios';

function useLoginMutation() {
	const loginMutation = useMutation((request) => {
		return axios.post(`${API_BASE_URL}api/auth/token`, request);
	});
	return loginMutation;
}
export default useLoginMutation;
