import analytics from '../../constants/analytics';

export const SUBMIT_USER_RESET_PASSWORD = 'SUBMIT_USER_RESET_PASSWORD';
export function submitUserResetPassword(data) {
	return {
		type: SUBMIT_USER_RESET_PASSWORD,
		data,
		analytics: {
			func: analytics.funcs.EVENT,
			event: {
				category: analytics.categories.ACCOUNT,
				action: 'Reset password from link'
			}
		}
	};
}
export const SUBMIT_USER_RESET_PASSWORD_FAILURE = 'SUBMIT_USER_RESET_PASSWORD_FAILURE';
export function submitUserResetPasswordFailure(data) {
	return {
		type: SUBMIT_USER_RESET_PASSWORD_FAILURE,
		data
	};
}
export const SUBMIT_USER_RESET_PASSWORD_SUCCESS = 'SUBMIT_USER_RESET_PASSWORD_SUCCESS';
export function submitUserResetPasswordSuccess() {
	return {
		type: SUBMIT_USER_RESET_PASSWORD_SUCCESS
	};
}
