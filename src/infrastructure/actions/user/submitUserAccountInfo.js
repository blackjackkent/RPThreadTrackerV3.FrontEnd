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
export const SUBMIT_USER_ACCOUNT_INFO_FAILURE = 'SUBMIT_USER_ACCOUNT_INFO_FAILURE';
export function submitUserAccountInfoFailure(data) {
	return {
		type: SUBMIT_USER_ACCOUNT_INFO_FAILURE,
		data
	};
}
export const SUBMIT_USER_ACCOUNT_INFO_SUCCESS = 'SUBMIT_USER_ACCOUNT_INFO_SUCCESS';
export function submitUserAccountInfoSuccess() {
	return {
		type: SUBMIT_USER_ACCOUNT_INFO_SUCCESS
	};
}
