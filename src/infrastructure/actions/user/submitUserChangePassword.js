export const SUBMIT_USER_CHANGE_PASSWORD = 'SUBMIT_USER_CHANGE_PASSWORD';
export function submitUserChangePassword(data) {
	return {
		type: SUBMIT_USER_CHANGE_PASSWORD,
		data
	};
}
