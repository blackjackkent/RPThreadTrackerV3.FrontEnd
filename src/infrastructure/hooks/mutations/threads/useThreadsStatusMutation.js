import { useReducer } from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';

const threadsStatusReducer = (state, action) => {
	if (!action) {
		return state;
	}
	if (action.type === 'reset') {
		return [];
	}
	let newState = [...state];
	newState = newState.concat(action.data);
	return newState;
};

function useThreadsStatusMutation(isArchived = false) {
	const [threadsStatus, dispatch] = useReducer(threadsStatusReducer, []);
	const threadsStatusMutation = useMutation(
		(chunk) => {
			return axios
				.post(`${TUMBLR_CLIENT_BASE_URL}api/thread`, chunk)
				.then((res) => Promise.resolve({ isArchived, data: res.data }));
		},
		{
			onSuccess: (res) => {
				dispatch(res);
			}
		}
	);
	const clearData = () => {
		dispatch({
			type: 'reset'
		});
	};
	return {
		threadsStatus,
		fetchThreadsStatusChunk: threadsStatusMutation.mutateAsync,
		clearData,
		...threadsStatusMutation
	};
}
export default useThreadsStatusMutation;
