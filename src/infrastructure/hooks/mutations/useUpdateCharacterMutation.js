import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import queryKeys from '~/infrastructure/constants/queryKeys';

function useUpdateCharacterMutation() {
	const queryClient = useQueryClient();
	const updateCharacterMutation = useMutation(
		(character) => {
			return axios
				.put(`${API_BASE_URL}api/character/${character.characterId}`, character)
				.then((res) => Promise.resolve(res.data));
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries([queryKeys.CHARACTERS]);
			}
		}
	);
	return {
		updateCharacter: updateCharacterMutation.mutateAsync,
		isLoading: updateCharacterMutation.isLoading
	};
}
export default useUpdateCharacterMutation;
