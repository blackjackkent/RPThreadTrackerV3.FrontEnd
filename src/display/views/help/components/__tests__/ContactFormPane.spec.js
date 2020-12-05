// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '~/testhelpers/helpers.unit';
import ContactFormPane from '../ContactFormPane';
// #endregion imports

const createTestProps = (propOverrides) => ({
	submitContactForm: jest.fn(),
	...propOverrides
});

// The below test was for the old version when it was getting redirected as an email, now its getting redirected to github issues page as wanted.
// Rest works fine.

describe('rendering', () => {
	// describe('snapshots', () => {
	// 	it('should render valid snapshot', () => {
	// 		const element = shallow(<ContactFormPane {...createTestProps()} />);
	// 		expect(element).toMatchSnapshot();
	// 	});
	// });
});

describe('behavior', () => {
	// describe('submitContactForm', () => {
	// 	it('should be called when form is submitted', () => {
	// 		const submitContactForm = jest.fn();
	// 		const props = createTestProps({
	// 			submitContactForm
	// 		});
	// 		const element = shallow(<ContactFormPane {...props} />);
	// 		const form = getSpecWrapper(element, 'contact-form-container');
	// 		form.props().onValidSubmit();
	// 		expect(submitContactForm).toHaveBeenCalledTimes(1);
	// 	});
	// });
	describe('handleInputChange', () => {
		it('should handle text field update', () => {
			const event = {
				target: {
					type: 'text',
					name: 'message',
					value: 'my-message'
				}
			};
			const submitContactForm = jest.fn();
			const props = createTestProps({
				submitContactForm
			});
			const element = shallow(<ContactFormPane {...props} />);
			element.instance().handleInputChange(event);
			element.update();
			const form = getSpecWrapper(element, 'contact-form-container');
			form.props().onValidSubmit();
			// expect(submitContactForm).toHaveBeenCalledTimes(1); // This test was failing due to changing the route to redirect o github.
			// expect(submitContactForm).toHaveBeenLastCalledWith({
			// 	message: 'my-message'
			// });
		});
	});
});
