import * as React from 'react';
import { useQueryClient } from 'react-query';

export default function useIsMutating() {
	const queryClient = useQueryClient();
	const [pendingMutations, setPendingMutations] = React.useState(0);

	React.useEffect(
		() =>
			queryClient.getMutationCache().subscribe(() => {
				const muts = queryClient
					.getMutationCache()
					.getAll()
					.filter((mutation) => mutation.state.status === 'loading').length;
				setPendingMutations(muts);
			}),
		[queryClient]
	);

	return pendingMutations;
}
