export const USER_CHANGE_PASSWORD_FAILURE = 'USER_CHANGE_PASSWORD_FAILURE';
export function userChangePasswordFailure(data) {
	return {
		type: USER_CHANGE_PASSWORD_FAILURE,
		data
	};
}
