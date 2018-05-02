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
