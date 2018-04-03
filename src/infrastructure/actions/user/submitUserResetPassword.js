export const SUBMIT_USER_RESET_PASSWORD = 'SUBMIT_USER_RESET_PASSWORD';
export function submitUserResetPassword(data) {
	return {
		type: SUBMIT_USER_RESET_PASSWORD,
		data
	};
}
