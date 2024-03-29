import { useQuery } from 'react-query';
import axios from 'axios';
import queryKeys from '~/infrastructure/constants/queryKeys';

function useCharactersQuery() {
	const charactersQuery = useQuery(queryKeys.CHARACTERS, () => {
		return axios.get(`${API_BASE_URL}api/character`).then((res) => {
			return Promise.resolve(res.data);
		});
	});
	return charactersQuery;
}
export default useCharactersQuery;
