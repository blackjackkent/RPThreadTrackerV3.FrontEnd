import analytics from '../../constants/analytics';

export const SUBMIT_USER_ACCOUNT_DELETION = 'SUBMIT_USER_ACCOUNT_DELETION';
export function submitUserAccountDeletion() {
	return {
		type: SUBMIT_USER_ACCOUNT_DELETION,
		analytics: {
			func: analytics.funcs.EVENT,
			event: {
				category: analytics.categories.ACCOUNT,
				action: 'Deleted account'
			}
		}
	};
}
export const SUBMIT_USER_ACCOUNT_DELETION_FAILURE = 'SUBMIT_USER_ACCOUNT_DELETION_FAILURE';
export function submitUserAccountDeletionFailure(data) {
	return {
		type: SUBMIT_USER_ACCOUNT_DELETION_FAILURE,
		data
	};
}
export const SUBMIT_USER_ACCOUNT_DELETION_SUCCESS = 'SUBMIT_USER_ACCOUNT_DELETION_SUCCESS';
export function submitUserAccountDeletionSuccess() {
	return {
		type: SUBMIT_USER_ACCOUNT_DELETION_SUCCESS
	};
}
