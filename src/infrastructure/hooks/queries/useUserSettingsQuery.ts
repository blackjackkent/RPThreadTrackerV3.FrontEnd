import { useQuery } from 'react-query';
import axios from 'axios';
import queryKeys from '~/infrastructure/constants/queryKeys';
import UserSettings from '~/types/user/UserSettings';

declare const API_BASE_URL: string;
function useUserSettingsQuery() {
	const userSettingsQuery = useQuery(queryKeys.USER_SETTINGS, async () => {
		const res = await axios.get<UserSettings>(`${API_BASE_URL}api/profilesettings`);
		return await Promise.resolve(res.data);
	});
	return userSettingsQuery;
}
export default useUserSettingsQuery;
