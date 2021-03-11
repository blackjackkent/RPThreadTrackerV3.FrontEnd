import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import queryKeys from '~/infrastructure/constants/queryKeys';

function useUntrackCharacterMutation() {
	const queryClient = useQueryClient();
	const untrackCharacterMutation = useMutation(
		(character) => {
			return axios.delete(`${API_BASE_URL}api/character/${character.characterId}`);
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries([queryKeys.CHARACTERS]);
				queryClient.invalidateQueries([queryKeys.THREADS]);
			}
		}
	);
	return {
		untrackCharacter: untrackCharacterMutation.mutateAsync,
		...untrackCharacterMutation
	};
}
export default useUntrackCharacterMutation;
