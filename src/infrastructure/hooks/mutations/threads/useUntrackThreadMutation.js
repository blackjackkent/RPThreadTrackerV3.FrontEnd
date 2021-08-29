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
	const bulkUntrackThreadMutation = useMutation(
		(threads) => {
			return Promise.allSettled(
				threads.map((t) => axios.delete(`${API_BASE_URL}api/thread/${t.threadId}`))
			);
		},
		{
			onSettled: (_, __, variables) => {
				if (variables.some((t) => t.isArchived)) {
					queryClient.invalidateQueries([queryKeys.THREADS, { isArchived: true }]);
				}
				if (variables.some((t) => !t.isArchived)) {
					queryClient.invalidateQueries([queryKeys.THREADS, { isArchived: false }]);
				}
			}
		}
	);
	const bulkUntrackThreads = (threads) => {
		const requests = threads.map((t) => untrackThreadMutation.mutateAsync(t));
		return Promise.allSettled(requests);
	};
	return {
		untrackThread: untrackThreadMutation.mutateAsync,
		bulkUntrackThreads: bulkUntrackThreadMutation.mutateAsync,
		...untrackThreadMutation
	};
}
export default useUntrackThreadMutation;
