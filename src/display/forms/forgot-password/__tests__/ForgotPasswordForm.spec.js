// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '~/testhelpers/helpers.unit';
import ForgotPasswordForm from '../ForgotPasswordForm';
// #endregion imports

const createTestProps = propOverrides => ({
	handleInputChange: jest.fn(),
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = (<ForgotPasswordForm {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
});

describe('behavior', () => {
	describe('validation', () => {
		it('should validate the email field', () => {
			const props = createTestProps();
			const jsx = (<ForgotPasswordForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'email-field').find('AvField');
			expect(field.props().validate.required).toHaveProperty('value', true);
			expect(field.props().validate.email).toHaveProperty('value', true);
		});
	});
	describe('handleInputChange', () => {
		it('should be called when email changes', () => {
			const handleInputChange = jest.fn();
			const props = createTestProps({ handleInputChange });
			const jsx = (<ForgotPasswordForm {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'email-field').find('AvField');
			field.simulate('change');
			expect(handleInputChange).toHaveBeenCalledTimes(1);
		});
	});
});
