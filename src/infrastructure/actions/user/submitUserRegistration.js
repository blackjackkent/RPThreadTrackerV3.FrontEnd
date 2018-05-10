import analytics from '../../constants/analytics';

export const SUBMIT_USER_REGISTRATION = 'SUBMIT_USER_REGISTRATION';
export function submitUserRegistration(data) {
	return {
		type: SUBMIT_USER_REGISTRATION,
		data,
		analytics: {
			func: analytics.funcs.EVENT,
			event: {
				category: analytics.categories.ACCOUNT,
				action: 'Registered'
			}
		}
	};
}
export const SUBMIT_USER_REGISTRATION_FAILURE = 'SUBMIT_USER_REGISTRATION_FAILURE';
export function submitUserRegistrationFailure(data) {
	return {
		type: SUBMIT_USER_REGISTRATION_FAILURE,
		data
	};
}
export const SUBMIT_USER_REGISTRATION_SUCCESS = 'SUBMIT_USER_REGISTRATION_SUCCESS';
export function submitUserRegistrationSuccess(data) {
	return {
		type: SUBMIT_USER_REGISTRATION_SUCCESS,
		data
	};
}
