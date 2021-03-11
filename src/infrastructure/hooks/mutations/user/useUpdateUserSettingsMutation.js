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
			onSuccess: () => {
				queryClient.invalidateQueries([queryKeys.USER_SETTINGS]);
			}
		}
	);
	return {
		updateUserSettings: updateUserSettingsMutation.mutateAsync,
		...updateUserSettingsMutation
	};
}
export default useUpdateUserSettingsMutation;
