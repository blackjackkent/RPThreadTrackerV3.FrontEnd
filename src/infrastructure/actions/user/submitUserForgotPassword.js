export const SUBMIT_USER_FORGOT_PASSWORD = 'SUBMIT_USER_FORGOT_PASSWORD';
export function submitUserForgotPassword(data) {
	return {
		type: SUBMIT_USER_FORGOT_PASSWORD,
		data
	};
}
