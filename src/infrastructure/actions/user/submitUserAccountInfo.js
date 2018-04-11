export const SUBMIT_USER_ACCOUNT_INFO = 'SUBMIT_USER_ACCOUNT_INFO';
export function submitUserAccountInfo(data) {
	return {
		type: SUBMIT_USER_ACCOUNT_INFO,
		data
	};
}
