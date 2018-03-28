export const USER_REGISTRATION_SUCCESS = 'USER_REGISTRATION_SUCCESS';
export function userRegistrationSuccess(data) {
	return {
		type: USER_REGISTRATION_SUCCESS,
		data
	};
}
