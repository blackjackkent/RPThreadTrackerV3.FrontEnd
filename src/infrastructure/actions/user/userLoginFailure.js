export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export function userLoginFailure(data) {
	return {
		type: USER_LOGIN_FAILURE,
		data
	};
}
