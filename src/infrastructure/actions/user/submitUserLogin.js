import analytics from '../../constants/analytics';

export const SUBMIT_USER_LOGIN = 'SUBMIT_USER_LOGIN';
export function submitUserLogin(data) {
	return {
		type: SUBMIT_USER_LOGIN,
		data,
		analytics: {
			func: analytics.funcs.EVENT,
			event: {
				category: analytics.categories.ACCOUNT,
				action: 'Logged in'
			}
		}
	};
}
export const SUBMIT_USER_LOGIN_FAILURE = 'SUBMIT_USER_LOGIN_FAILURE';
export function submitUserLoginFailure(data) {
	return {
		type: SUBMIT_USER_LOGIN_FAILURE,
		data
	};
}
export const SUBMIT_USER_LOGIN_SUCCESS = 'SUBMIT_USER_LOGIN_SUCCESS';
export function submitUserLoginSuccess() {
	return {
		type: SUBMIT_USER_LOGIN_SUCCESS
	};
}
