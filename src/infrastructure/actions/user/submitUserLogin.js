export const SUBMIT_USER_LOGIN = 'SUBMIT_USER_LOGIN';
export function submitUserLogin(data) {
	return {
		type: SUBMIT_USER_LOGIN,
		data
	};
}
