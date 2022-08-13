import { useQuery } from 'react-query';
import axios from 'axios';
import queryKeys from '~/infrastructure/constants/queryKeys';

function useUserSettingsQuery() {
	const userSettingsQuery = useQuery(queryKeys.USER_SETTINGS, () => {
		return axios
			.get(`${API_BASE_URL}api/profilesettings`)
			.then((res) => Promise.resolve(res.data));
	});
	return userSettingsQuery;
}
export default useUserSettingsQuery;
