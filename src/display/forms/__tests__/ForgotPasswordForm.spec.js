// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '../../../../config/tests/helpers.unit';
import ForgotPasswordForm from '../forgot-password/ForgotPasswordForm';
// #endregion imports

const createTestProps = propOverrides => ({
	handleInputChange: jest.fn(),
	...propOverrides
});

describe('rendering', () => {
	it('should render valid snapshot', () => {
		const props = createTestProps();
		const jsx = (<ForgotPasswordForm {...props} />);
		const element = shallow(jsx);
		expect(element).toMatchSnapshot();
	});
	it('should validate the email field', () => {
		const props = createTestProps();
		const jsx = (<ForgotPasswordForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'email-field');
		expect(field.props().validate.required).toHaveProperty('value', true);
		expect(field.props().validate.email).toHaveProperty('value', true);
	});
});

describe('behavior', () => {
	it('should handle input change for email', () => {
		const handleInputChange = jest.fn();
		const props = createTestProps({ handleInputChange });
		const jsx = (<ForgotPasswordForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'email-field');
		field.simulate('change');
		expect(handleInputChange).toHaveBeenCalledTimes(1);
	});
});
