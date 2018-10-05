// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '../../../../../config/tests/helpers.unit';
import ResetPasswordForm from '../ResetPasswordForm';
// #endregion imports

const createTestProps = propOverrides => ({
	handleInputChange: jest.fn(),
	tooltipDisplayData: {},
	showTooltip: jest.fn(),
	hideTooltip: jest.fn(),
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = (<ResetPasswordForm {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
});

describe('behavior', () => {
	describe('validation', () => {
		it('should validate the new password field', () => {
			const props = createTestProps();
			const jsx = (<ResetPasswordForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'new-password-field').find('AvField');
			expect(field.props().validate.required).toHaveProperty('value', true);
			expect(field.props().validate.minLength).toHaveProperty('value', 6);
		});
		it('should validate the confirm new password field', () => {
			const props = createTestProps();
			const jsx = (<ResetPasswordForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'confirm-new-password-field').find('AvField');
			expect(field.props().validate.required).toHaveProperty('value', true);
			expect(field.props().validate.match).toHaveProperty('value', 'newPassword');
		});
	});
	describe('handleInputChange', () => {
		it('should be called when new password changes', () => {
			const handleInputChange = jest.fn();
			const props = createTestProps({ handleInputChange });
			const jsx = (<ResetPasswordForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'new-password-field').find('AvField');
			field.simulate('change');
			expect(handleInputChange).toHaveBeenCalledTimes(1);
		});
		it('should be called when new password confirmation changes', () => {
			const handleInputChange = jest.fn();
			const props = createTestProps({ handleInputChange });
			const jsx = (<ResetPasswordForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'confirm-new-password-field').find('AvField');
			field.simulate('change');
			expect(handleInputChange).toHaveBeenCalledTimes(1);
		});
	});
});
