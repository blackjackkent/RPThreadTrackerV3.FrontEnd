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
			onSuccess: (data) => {
				queryClient.setQueryData([queryKeys.CHARACTERS, { id: data.characterId }], data);
			}
		}
	);
	return createCharacterMutation;
}
export default useCreateCharacterMutation;
