export const USER_ACCOUNT_INFO_FAILURE = 'USER_ACCOUNT_INFO_FAILURE';
export function userAccountInfoFailure(data) {
	return {
		type: USER_ACCOUNT_INFO_FAILURE,
		data
	};
}
