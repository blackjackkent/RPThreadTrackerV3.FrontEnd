// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '../../../../config/tests/helpers.unit';
import ResetPasswordForm from '../reset-password/ResetPasswordForm';
// #endregion imports

const createTestProps = propOverrides => ({
	handleInputChange: jest.fn(),
	...propOverrides
});

describe('rendering', () => {
	it('should render valid snapshot', () => {
		const props = createTestProps();
		const jsx = (<ResetPasswordForm {...props} />);
		const element = shallow(jsx);
		expect(element).toMatchSnapshot();
	});
	it('should validate the new password field', () => {
		const props = createTestProps();
		const jsx = (<ResetPasswordForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'new-password-field');
		expect(field.props().validate.required).toHaveProperty('value', true);
		expect(field.props().validate.minLength).toHaveProperty('value', 6);
	});
	it('should validate the confirm new password field', () => {
		const props = createTestProps();
		const jsx = (<ResetPasswordForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'confirm-new-password-field');
		expect(field.props().validate.required).toHaveProperty('value', true);
		expect(field.props().validate.match).toHaveProperty('value', 'newPassword');
	});
});

describe('behavior', () => {
	it('should handle input change for new password', () => {
		const handleInputChange = jest.fn();
		const props = createTestProps({ handleInputChange });
		const jsx = (<ResetPasswordForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'new-password-field');
		field.simulate('change');
		expect(handleInputChange).toHaveBeenCalledTimes(1);
	});
	it('should handle input change for confirm-new password', () => {
		const handleInputChange = jest.fn();
		const props = createTestProps({ handleInputChange });
		const jsx = (<ResetPasswordForm {...props} />);
		const element = shallow(jsx);
		const field = getSpecWrapper(element, 'confirm-new-password-field');
		field.simulate('change');
		expect(handleInputChange).toHaveBeenCalledTimes(1);
	});
});
