import analytics from '../../constants/analytics';

export const SUBMIT_USER_LOGOUT = 'SUBMIT_USER_LOGOUT';
export function submitUserLogout() {
	return {
		type: SUBMIT_USER_LOGOUT,
		analytics: {
			func: analytics.funcs.EVENT,
			event: {
				category: analytics.categories.ACCOUNT,
				action: 'Logged out'
			}
		}
	};
}
