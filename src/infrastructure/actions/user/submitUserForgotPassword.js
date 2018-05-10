import analytics from '../../constants/analytics';

export const SUBMIT_USER_FORGOT_PASSWORD = 'SUBMIT_USER_FORGOT_PASSWORD';
export function submitUserForgotPassword(data) {
	return {
		type: SUBMIT_USER_FORGOT_PASSWORD,
		data,
		analytics: {
			func: analytics.funcs.EVENT,
			event: {
				category: analytics.categories.ACCOUNT,
				action: 'Requested forgot password link'
			}
		}
	};
}
export const SUBMIT_USER_FORGOT_PASSWORD_FAILURE = 'SUBMIT_USER_FORGOT_PASSWORD_FAILURE';
export function submitUserForgotPasswordFailure(data) {
	return {
		type: SUBMIT_USER_FORGOT_PASSWORD_FAILURE,
		data
	};
}
export const SUBMIT_USER_FORGOT_PASSWORD_SUCCESS = 'SUBMIT_USER_FORGOT_PASSWORD_SUCCESS';
export function submitUserForgotPasswordSuccess() {
	return {
		type: SUBMIT_USER_FORGOT_PASSWORD_SUCCESS
	};
}
