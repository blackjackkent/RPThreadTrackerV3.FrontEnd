// #region imports
import React from 'react';
import { getSpecWrapper, shallowWithState } from '../../../../../config/tests/helpers.unit';
import ResetPassword from '../ResetPassword';
// #endregion imports

// #region mocks
jest.mock('../../../shared/loading/LoadingIndicator', () => 'LoadingIndicator');
jest.mock('../../../forms/reset-password/ResetPasswordForm', () => 'ResetPasswordForm');
jest.mock('../../../../infrastructure/actions', () => ({}));
jest.mock('../../../../utility', () => ({
	getQuery: () => ({
		email: 'test@test.com',
		code: '13579'
	})
}));
// #endregion mocks

const createTestProps = propOverrides => ({
	submitUserResetPassword: jest.fn(),
	...propOverrides
});

const createTestState = stateOverrides => ({
	loading: { resetPasswordLoading: false },
	errors: { resetPasswordError: null },
	...stateOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const state = createTestState();
			const jsx = (<ResetPassword {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot with loading indicator when reset password loading', () => {
			const props = createTestProps();
			const state = createTestState({
				loading: {
					resetPasswordLoading: true
				}
			});
			const jsx = (<ResetPassword {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot with error message', () => {
			const props = createTestProps();
			const state = createTestState({ errors: { resetPasswordError: 'An unknown error occurred.' } });
			const jsx = (<ResetPassword {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
	});
});

describe('behavior', () => {
	describe('handleResetPasswordSubmit', () => {
		it('should be called when form is submitted', () => {
			const submitUserResetPassword = jest.fn();
			const props = createTestProps({ submitUserResetPassword });
			const state = createTestState();
			const jsx = (<ResetPassword {...props} />);
			const element = shallowWithState(jsx, state).dive();
			const form = getSpecWrapper(element, 'reset-password-form-container');
			form.props().onValidSubmit();
			expect(submitUserResetPassword).toHaveBeenCalledTimes(1);
			expect(submitUserResetPassword).toHaveBeenLastCalledWith({ Email: 'test@test.com', Code: '13579' });
		});
	});
	describe('handleInputChange', () => {
		it('should handle text field update', () => {
			const event = { target: { type: 'text', name: 'password', value: 'my-new-password' } };
			const submitUserResetPassword = jest.fn();
			const props = createTestProps({ submitUserResetPassword });
			const state = createTestState();
			const jsx = (<ResetPassword {...props} />);
			const element = shallowWithState(jsx, state).dive();
			element.instance().handleInputChange(event);
			const form = getSpecWrapper(element, 'reset-password-form-container');
			form.props().onValidSubmit();
			expect(submitUserResetPassword).toHaveBeenCalledTimes(1);
			expect(submitUserResetPassword).toHaveBeenLastCalledWith({ Email: 'test@test.com', Code: '13579', password: 'my-new-password' });
		});
	});
});
