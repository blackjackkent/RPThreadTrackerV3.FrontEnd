import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { useState } from 'react';
import queryKeys from '~/infrastructure/constants/queryKeys';

function useUntrackThreadMutation() {
	const [isArchived, setIsArchived] = useState(false);
	const queryClient = useQueryClient();
	const untrackThreadMutation = useMutation(
		(thread) => {
			setIsArchived(thread.isArchived);
			return axios.delete(`${API_BASE_URL}api/thread/${thread.threadId}`);
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries([queryKeys.THREADS, { isArchived }]);
			}
		}
	);
	return {
		untrackThread: untrackThreadMutation.mutateAsync,
		...untrackThreadMutation
	};
}
export default useUntrackThreadMutation;
