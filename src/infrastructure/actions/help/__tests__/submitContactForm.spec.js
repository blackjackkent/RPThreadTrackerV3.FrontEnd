import * as actions from '../submitContactForm';

describe('untrackCharacter', () => {
	it('should create action with type, data, and analytics', () => {
		const form = { message: 'Test message.' };
		const action = actions.submitContactForm(form);
		expect(action.type).toBe('SUBMIT_CONTACT_FORM');
		expect(action.data).toBe(form);
		expect(action.analytics.func).toBe('event');
		expect(action.analytics.event.category).toBe('Account');
		expect(action.analytics.event.action).toBe('Submitted contact form');
	});
});
describe('submitContactFormFailure', () => {
	it('should create action with type', () => {
		const action = actions.submitContactFormFailure();
		expect(action.type).toBe('SUBMIT_CONTACT_FORM_FAILURE');
	});
});
describe('submitContactFormSuccess', () => {
	it('should create action with type', () => {
		const action = actions.submitContactFormSuccess();
		expect(action.type).toBe('SUBMIT_CONTACT_FORM_SUCCESS');
	});
});
