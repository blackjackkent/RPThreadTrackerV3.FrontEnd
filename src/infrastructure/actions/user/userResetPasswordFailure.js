export const USER_RESET_PASSWORD_FAILURE = 'USER_RESET_PASSWORD_FAILURE';
export function userResetPasswordFailure(data) {
	return {
		type: USER_RESET_PASSWORD_FAILURE,
		data
	};
}
