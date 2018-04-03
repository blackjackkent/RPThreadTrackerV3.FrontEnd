export const USER_FORGOT_PASSWORD_FAILURE = 'USER_FORGOT_PASSWORD_FAILURE';
export function userForgotPasswordFailure(data) {
	return {
		type: USER_FORGOT_PASSWORD_FAILURE,
		data
	};
}
