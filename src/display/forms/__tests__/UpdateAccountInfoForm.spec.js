// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '../../../utility/testHelpers';
import UpdateAccountInfoForm from '../update-account-info/UpdateAccountInfoForm';
// #endregion imports

const createTestProps = propOverrides => ({
	handleInputChange: jest.fn(),
	user: {
		userName: 'TestUser',
		email: 'test@test.com'
	},
	...propOverrides
});

describe('rendering', () => {
	it('should render valid snapshot', () => {
		const props = createTestProps();
		const jsx = (<UpdateAccountInfoForm {...props} />);
		const element = shallow(jsx);
		expect(element).toMatchSnapshot();
	});
	it('should populate existing username', () => {
		const props = createTestProps();
		const jsx = (<UpdateAccountInfoForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'username-field');
		expect(field).toHaveValue('TestUser');
	});
	it('should populate existing email and disable field', () => {
		const props = createTestProps();
		const jsx = (<UpdateAccountInfoForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'email-field');
		expect(field).toHaveValue('test@test.com');
		expect(field).toBeDisabled();
	});
	it('should validate the username field', () => {
		const props = createTestProps();
		const jsx = (<UpdateAccountInfoForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'username-field');
		expect(field.props().validate.required).toHaveProperty('value', true);
		expect(field.props().validate.minLength).toHaveProperty('value', 3);
		expect(field.props().validate.maxLength).toHaveProperty('value', 256);
	});
	it('should validate the email field', () => {
		const props = createTestProps();
		const jsx = (<UpdateAccountInfoForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'email-field');
		expect(field.props().validate.required).toHaveProperty('value', true);
		expect(field.props().validate.email).toHaveProperty('value', true);
	});
});

describe('behavior', () => {
	it('should handle input change for username', () => {
		const handleInputChange = jest.fn();
		const props = createTestProps({ handleInputChange });
		const jsx = (<UpdateAccountInfoForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'username-field');
		field.simulate('change');
		expect(handleInputChange).toHaveBeenCalledTimes(1);
	});
});
