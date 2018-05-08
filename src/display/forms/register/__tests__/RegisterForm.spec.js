// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '../../../../utility/testHelpers';
import RegisterForm from '../RegisterForm';
// #endregion imports

const createTestProps = propOverrides => ({
	handleInputChange: jest.fn(),
	...propOverrides
});

describe('rendering', () => {
	it('should render valid snapshot', () => {
		const props = createTestProps();
		const jsx = (<RegisterForm {...props} />);
		const element = shallow(jsx);
		expect(element).toMatchSnapshot();
	});
	it('should validate the username field', () => {
		const props = createTestProps();
		const jsx = (<RegisterForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'username-field');
		expect(field.props().validate.required).toHaveProperty('value', true);
		expect(field.props().validate.minLength).toHaveProperty('value', 3);
		expect(field.props().validate.maxLength).toHaveProperty('value', 256);
	});
	it('should validate the email field', () => {
		const props = createTestProps();
		const jsx = (<RegisterForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'email-field');
		expect(field.props().validate.required).toHaveProperty('value', true);
		expect(field.props().validate.email).toHaveProperty('value', true);
	});
	it('should validate the password field', () => {
		const props = createTestProps();
		const jsx = (<RegisterForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'password-field');
		expect(field.props().validate.required).toHaveProperty('value', true);
		expect(field.props().validate.minLength).toHaveProperty('value', 6);
	});
	it('should validate the confirm password field', () => {
		const props = createTestProps();
		const jsx = (<RegisterForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'confirm-password-field');
		expect(field.props().validate.required).toHaveProperty('value', true);
		expect(field.props().validate.match).toHaveProperty('value', 'password');
	});
});

describe('behavior', () => {
	it('should handle input change for username', () => {
		const handleInputChange = jest.fn();
		const props = createTestProps({ handleInputChange });
		const jsx = (<RegisterForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'username-field');
		field.simulate('change');
		expect(handleInputChange).toHaveBeenCalledTimes(1);
	});
	it('should handle input change for email', () => {
		const handleInputChange = jest.fn();
		const props = createTestProps({ handleInputChange });
		const jsx = (<RegisterForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'email-field');
		field.simulate('change');
		expect(handleInputChange).toHaveBeenCalledTimes(1);
	});
	it('should handle input change for password', () => {
		const handleInputChange = jest.fn();
		const props = createTestProps({ handleInputChange });
		const jsx = (<RegisterForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'password-field');
		field.simulate('change');
		expect(handleInputChange).toHaveBeenCalledTimes(1);
	});
	it('should handle input change for confirm password', () => {
		const handleInputChange = jest.fn();
		const props = createTestProps({ handleInputChange });
		const jsx = (<RegisterForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'confirm-password-field');
		field.simulate('change');
		expect(handleInputChange).toHaveBeenCalledTimes(1);
	});
});
