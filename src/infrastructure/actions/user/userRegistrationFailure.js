export const USER_REGISTRATION_FAILURE = 'USER_REGISTRATION_FAILURE';
export function userRegistrationFailure(data) {
	return {
		type: USER_REGISTRATION_FAILURE,
		data
	};
}
