export const SUBMIT_USER_REGISTRATION = 'SUBMIT_USER_REGISTRATION';
export function submitUserRegistration(data) {
	return {
		type: SUBMIT_USER_REGISTRATION,
		data
	};
}
