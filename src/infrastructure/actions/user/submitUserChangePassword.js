import analytics from '../../constants/analytics';

export const SUBMIT_USER_CHANGE_PASSWORD = 'SUBMIT_USER_CHANGE_PASSWORD';
export function submitUserChangePassword(data) {
	return {
		type: SUBMIT_USER_CHANGE_PASSWORD,
		data,
		analytics: {
			func: analytics.funcs.EVENT,
			event: {
				category: analytics.categories.ACCOUNT,
				action: 'Updated password'
			}
		}
	};
}
export const SUBMIT_USER_CHANGE_PASSWORD_FAILURE = 'SUBMIT_USER_CHANGE_PASSWORD_FAILURE';
export function submitUserChangePasswordFailure(data) {
	return {
		type: SUBMIT_USER_CHANGE_PASSWORD_FAILURE,
		data
	};
}
export const SUBMIT_USER_CHANGE_PASSWORD_SUCCESS = 'SUBMIT_USER_CHANGE_PASSWORD_SUCCESS';
export function submitUserChangePasswordSuccess() {
	return {
		type: SUBMIT_USER_CHANGE_PASSWORD_SUCCESS
	};
}
