import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import queryKeys from '~/infrastructure/constants/queryKeys';

function useCreateCharacterMutation() {
	const queryClient = useQueryClient();
	const createCharacterMutation = useMutation(
		(character) => {
			return axios
				.post(`${API_BASE_URL}api/character`, character)
				.then((res) => Promise.resolve(res.data));
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries([queryKeys.CHARACTERS]);
			}
		}
	);
	return {
		createCharacter: createCharacterMutation.mutateAsync,
		isLoading: createCharacterMutation.isLoading
	};
}
export default useCreateCharacterMutation;
