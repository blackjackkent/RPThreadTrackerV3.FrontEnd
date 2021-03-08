import { useReducer } from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';

const threadsStatusReducer = (state, action) => {
	if (!action) {
		return state;
	}
	return { ...state, [action.chunkId]: action.data };
};

function useThreadsStatusMutation(isArchived = false) {
	const [threadsStatus, dispatch] = useReducer(threadsStatusReducer, {});
	const threadsStatusMutation = useMutation(
		(chunk) => {
			return axios
				.post(`${TUMBLR_CLIENT_BASE_URL}api/thread`, chunk.threads)
				.then((res) =>
					Promise.resolve({ chunkId: chunk.chunkId, isArchived, data: res.data })
				);
		},
		{
			onSuccess: (res) => {
				dispatch(res);
			}
		}
	);
	return {
		threadsStatus,
		fetchThreadsStatusChunk: threadsStatusMutation.mutateAsync,
		...threadsStatusMutation
	};
}
export default useThreadsStatusMutation;
