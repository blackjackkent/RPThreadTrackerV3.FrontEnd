export const SUBMIT_CONTACT_FORM = 'SUBMIT_CONTACT_FORM';
export function submitContactForm(data) {
	return {
		type: SUBMIT_CONTACT_FORM,
		data
	};
}
