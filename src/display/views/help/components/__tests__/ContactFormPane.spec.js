// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '~/testhelpers/helpers.unit';
import ContactFormPane from '../ContactFormPane';
// #endregion imports

const createTestProps = propOverrides => ({
	submitContactForm: jest.fn(),
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const element = shallow(<ContactFormPane {...createTestProps()} />);
			expect(element).toMatchSnapshot();
		});
	});
});

describe('behavior', () => {
	describe('submitContactForm', () => {
		it('should be called when form is submitted', () => {
			const submitContactForm = jest.fn();
			const props = createTestProps({ submitContactForm });
			const element = shallow(<ContactFormPane {...props} />);
			const form = getSpecWrapper(element, 'contact-form-container');
			form.props().onValidSubmit();
			expect(submitContactForm).toHaveBeenCalledTimes(1);
		});
	});
	describe('handleInputChange', () => {
		it('should handle text field update', () => {
			const event = { target: { type: 'text', name: 'message', value: 'my-message' } };
			const submitContactForm = jest.fn();
			const props = createTestProps({ submitContactForm });
			const element = shallow(<ContactFormPane {...props} />);
			element.instance().handleInputChange(event);
			element.update();
			const form = getSpecWrapper(element, 'contact-form-container');
			form.props().onValidSubmit();
			expect(submitContactForm).toHaveBeenCalledTimes(1);
			expect(submitContactForm).toHaveBeenLastCalledWith({ message: 'my-message' });
		});
	});
});
