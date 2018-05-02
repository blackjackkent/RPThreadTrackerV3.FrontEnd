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
