// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '~/utility/helpers.unit';
import ChangePasswordPane from '../ChangePasswordPane';
// #endregion imports

jest.mock('../../../../forms/TooltipForm', () => 'TooltipForm');
jest.mock('../../../../forms/change-password/ChangePasswordForm', () => 'ChangePasswordForm');

const createTestProps = propOverrides => ({
	submitChangePasswordForm: jest.fn(),
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const element = shallow(<ChangePasswordPane {...createTestProps()} />);
			expect(element).toMatchSnapshot();
		});
	});
});

describe('behavior', () => {
	describe('submitChangePasswordForm', () => {
		it('should be called when form is submitted', () => {
			const submitChangePasswordForm = jest.fn();
			const props = createTestProps({ submitChangePasswordForm });
			const element = shallow(<ChangePasswordPane {...props} />);
			const form = getSpecWrapper(element, 'change-password-form-container');
			form.props().onValidSubmit();
			expect(submitChangePasswordForm).toHaveBeenCalledTimes(1);
		});
	});
	describe('handleInputChange', () => {
		it('should handle text field update', () => {
			const event = { target: { type: 'text', name: 'password', value: 'my-new-password' } };
			const submitChangePasswordForm = jest.fn();
			const props = createTestProps({ submitChangePasswordForm });
			const element = shallow(<ChangePasswordPane {...props} />);
			element.instance().handleInputChange(event);
			element.update();
			const form = getSpecWrapper(element, 'change-password-form-container');
			form.props().onValidSubmit();
			expect(submitChangePasswordForm).toHaveBeenCalledTimes(1);
			expect(submitChangePasswordForm).toHaveBeenLastCalledWith({ password: 'my-new-password' });
		});
	});
});
