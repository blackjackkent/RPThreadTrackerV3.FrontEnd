// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '~/testhelpers/helpers.unit';
import UpdateAccountInfoPane from '../UpdateAccountInfoPane';
// #endregion imports

jest.mock(
	'../../../../forms/update-account-info/UpdateAccountInfoForm',
	() => 'UpdateAccountInfoForm'
);

const createTestProps = (propOverrides) => ({
	submitAccountInfoForm: jest.fn(),
	user: {
		id: '12345',
		email: 'test@test.com',
		username: 'my-username'
	},
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const element = shallow(<UpdateAccountInfoPane {...createTestProps()} />);
			expect(element).toMatchSnapshot();
		});
	});
});

describe('behavior', () => {
	describe('componentWillReceiveProps', () => {
		it('should set character to edit', () => {
			const submitAccountInfoForm = jest.fn();
			const user = {
				id: '12345',
				email: 'test@test.com',
				username: 'my-test-username'
			};
			const props = createTestProps({
				submitAccountInfoForm,
				user: {}
			});
			const jsx = <UpdateAccountInfoPane {...props} />;
			const element = shallow(jsx);
			element.setProps({
				user
			});
			const form = getSpecWrapper(element, 'account-info-form-container');
			form.prop('onValidSubmit')();
			expect(submitAccountInfoForm).toHaveBeenCalledTimes(1);
			expect(submitAccountInfoForm).toHaveBeenLastCalledWith(user);
		});
	});
	describe('submitAccountInfoForm', () => {
		it('should be called when form is submitted', () => {
			const submitAccountInfoForm = jest.fn();
			const props = createTestProps({
				submitAccountInfoForm
			});
			const element = shallow(<UpdateAccountInfoPane {...props} />);
			const form = getSpecWrapper(element, 'account-info-form-container');
			form.props().onValidSubmit();
			expect(submitAccountInfoForm).toHaveBeenCalledTimes(1);
		});
	});
	describe('handleInputChange', () => {
		it('should handle text field update', () => {
			const event = {
				target: {
					type: 'text',
					name: 'username',
					value: 'my-new-username'
				}
			};
			const submitAccountInfoForm = jest.fn();
			const props = createTestProps({
				submitAccountInfoForm
			});
			const element = shallow(<UpdateAccountInfoPane {...props} />);
			element.instance().handleInputChange(event);
			element.update();
			const form = getSpecWrapper(element, 'account-info-form-container');
			form.props().onValidSubmit();
			expect(submitAccountInfoForm).toHaveBeenCalledTimes(1);
			expect(submitAccountInfoForm).toHaveBeenLastCalledWith({
				username: 'my-new-username'
			});
		});
	});
});
