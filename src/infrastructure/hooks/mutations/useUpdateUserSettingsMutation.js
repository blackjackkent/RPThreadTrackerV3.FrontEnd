import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import queryKeys from '~/infrastructure/constants/queryKeys';

function useUpdateUserSettingsMutation() {
	const queryClient = useQueryClient();
	const updateUserSettingsMutation = useMutation(
		(request) => {
			return axios
				.put(`${API_BASE_URL}api/profilesettings`, request)
				.then((res) => Promise.resolve(res.data));
		},
		{
			onSuccess: (data) => {
				queryClient.setQueryData([queryKeys.USER_SETTINGS], data);
			}
		}
	);
	return updateUserSettingsMutation;
}
export default useUpdateUserSettingsMutation;
