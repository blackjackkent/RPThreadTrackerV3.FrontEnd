import analytics from '../../constants/analytics';

export const SUBMIT_CONTACT_FORM = 'SUBMIT_CONTACT_FORM';
export function submitContactForm(data) {
	return {
		type: SUBMIT_CONTACT_FORM,
		data,
		analytics: {
			func: analytics.funcs.EVENT,
			event: {
				category: analytics.categories.ACCOUNT,
				action: 'Submitted contact form'
			}
		}
	};
}
