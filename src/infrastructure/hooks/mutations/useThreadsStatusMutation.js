import { useReducer } from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';

const threadsStatusReducer = (state, action) => {
	if (!action) {
		return state;
	}
	console.log('UPDATING STATE');
	console.log(state);
	console.log(action);
	let newState = [...state];
	newState = newState.concat(action.data);
	console.log(newState);
	console.log('***********************');
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
	return {
		threadsStatus,
		fetchThreadsStatusChunk: threadsStatusMutation.mutateAsync,
		...threadsStatusMutation
	};
}
export default useThreadsStatusMutation;
