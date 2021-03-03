import { useMutation } from 'react-query';
import axios from 'axios';

function useCreateThreadMutation() {
	const createThreadMutation = useMutation((thread) => {
		return axios.post(`${API_BASE_URL}api/thread`, thread);
	});
	return createThreadMutation;
}
export default useCreateThreadMutation;
