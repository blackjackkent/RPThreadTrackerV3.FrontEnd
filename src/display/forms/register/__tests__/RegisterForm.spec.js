// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '../../../../../config/tests/helpers.unit';
import RegisterForm from '../RegisterForm';
// #endregion imports

const createTestProps = propOverrides => ({
	handleInputChange: jest.fn(),
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = (<RegisterForm {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
});

describe('behavior', () => {
	describe('validation', () => {
		it('should validate the username field', () => {
			const props = createTestProps();
			const jsx = (<RegisterForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'username-field').find('AvField');
			expect(field.props().validate.required).toHaveProperty('value', true);
			expect(field.props().validate.minLength).toHaveProperty('value', 3);
			expect(field.props().validate.maxLength).toHaveProperty('value', 256);
		});
		it('should validate the email field', () => {
			const props = createTestProps();
			const jsx = (<RegisterForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'email-field').find('AvField');
			expect(field.props().validate.required).toHaveProperty('value', true);
			expect(field.props().validate.email).toHaveProperty('value', true);
		});
		it('should validate the password field', () => {
			const props = createTestProps();
			const jsx = (<RegisterForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'password-field').find('AvField');
			expect(field.props().validate.required).toHaveProperty('value', true);
			expect(field.props().validate.minLength).toHaveProperty('value', 6);
		});
		it('should validate the confirm password field', () => {
			const props = createTestProps();
			const jsx = (<RegisterForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'confirm-password-field').find('AvField');
			expect(field.props().validate.required).toHaveProperty('value', true);
			expect(field.props().validate.match).toHaveProperty('value', 'password');
		});
	});
	describe('handleInputChange', () => {
		it('should be called when username changes', () => {
			const handleInputChange = jest.fn();
			const props = createTestProps({ handleInputChange });
			const jsx = (<RegisterForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'username-field').find('AvField');
			field.simulate('change');
			expect(handleInputChange).toHaveBeenCalledTimes(1);
		});
		it('should be called when email changes', () => {
			const handleInputChange = jest.fn();
			const props = createTestProps({ handleInputChange });
			const jsx = (<RegisterForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'email-field').find('AvField');
			field.simulate('change');
			expect(handleInputChange).toHaveBeenCalledTimes(1);
		});
		it('should be called when password changes', () => {
			const handleInputChange = jest.fn();
			const props = createTestProps({ handleInputChange });
			const jsx = (<RegisterForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'password-field').find('AvField');
			field.simulate('change');
			expect(handleInputChange).toHaveBeenCalledTimes(1);
		});
		it('should be called when password confirmation changes', () => {
			const handleInputChange = jest.fn();
			const props = createTestProps({ handleInputChange });
			const jsx = (<RegisterForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'confirm-password-field').find('AvField');
			field.simulate('change');
			expect(handleInputChange).toHaveBeenCalledTimes(1);
		});
	});
});
