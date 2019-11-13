// #region imports
import React from 'react';
import { getSpecWrapper, shallowWithState } from '~/testhelpers/helpers.unit';
import ForgotPassword from '../ForgotPassword';
// #endregion imports

// #region mocks
jest.mock('../../../shared/loading/LoadingIndicator', () => 'LoadingIndicator');
jest.mock('../../../forms/forgot-password/ForgotPasswordForm', () => 'ForgotPasswordForm');
jest.mock('../../../../infrastructure/actions', () => ({}));
// #endregion mocks

const createTestProps = propOverrides => ({
	submitUserForgotPassword: jest.fn(),
	...propOverrides
});

const createTestState = stateOverrides => ({
	loading: { forgotPasswordLoading: false },
	errors: { forgotPasswordError: null },
	...stateOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const state = createTestState();
			const jsx = (<ForgotPassword {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot with loading indicator', () => {
			const props = createTestProps();
			const state = createTestState({ loading: { forgotPasswordLoading: true } });
			const jsx = (<ForgotPassword {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot with error message', () => {
			const props = createTestProps();
			const state = createTestState({ errors: { forgotPasswordError: 'An unknown error occurred.' } });
			const jsx = (<ForgotPassword {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
	});
});

describe('behavior', () => {
	describe('handleForgotPasswordSubmit', () => {
		it('should be called when form is submitted', () => {
			const submitUserForgotPassword = jest.fn();
			const props = createTestProps({ submitUserForgotPassword });
			const state = createTestState();
			const jsx = (<ForgotPassword {...props} />);
			const element = shallowWithState(jsx, state).dive();
			const form = getSpecWrapper(element, 'forgot-password-form-container');
			form.props().onValidSubmit();
			expect(submitUserForgotPassword).toHaveBeenCalledTimes(1);
		});
	});
	describe('handleInputChange', () => {
		it('should handle text field update', () => {
			const event = { target: { type: 'text', name: 'username', value: 'my-username' } };
			const submitUserForgotPassword = jest.fn();
			const props = createTestProps({ submitUserForgotPassword });
			const state = createTestState();
			const jsx = (<ForgotPassword {...props} />);
			const element = shallowWithState(jsx, state).dive();
			element.instance().handleInputChange(event);
			const form = getSpecWrapper(element, 'forgot-password-form-container');
			form.props().onValidSubmit();
			expect(submitUserForgotPassword).toHaveBeenCalledTimes(1);
			expect(submitUserForgotPassword).toHaveBeenLastCalledWith({ username: 'my-username' });
		});
	});
});
