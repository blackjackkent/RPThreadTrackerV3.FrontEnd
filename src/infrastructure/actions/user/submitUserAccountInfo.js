import analytics from '../../constants/analytics';

export const SUBMIT_USER_ACCOUNT_INFO = 'SUBMIT_USER_ACCOUNT_INFO';
export function submitUserAccountInfo(data) {
	return {
		type: SUBMIT_USER_ACCOUNT_INFO,
		data,
		analytics: {
			func: analytics.funcs.EVENT,
			event: {
				category: analytics.categories.ACCOUNT,
				action: 'Updated user account info'
			}
		}
	};
}
