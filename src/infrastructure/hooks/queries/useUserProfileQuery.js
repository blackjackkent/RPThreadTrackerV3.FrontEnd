import { useQuery } from 'react-query';
import axios from 'axios';
import queryKeys from '~/infrastructure/constants/queryKeys';

function useUserProfileQuery() {
	const userProfileQuery = useQuery(queryKeys.USER_PROFILE, () => {
		return axios.get(`${API_BASE_URL}api/user`);
	});
	return userProfileQuery;
}
export default useUserProfileQuery;
