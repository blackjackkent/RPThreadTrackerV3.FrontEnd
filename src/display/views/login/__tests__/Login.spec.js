// #region imports
import React from 'react';
import { getSpecWrapper, shallowWithState } from '~/testhelpers/helpers.unit';
import Login from '../Login';
// #endregion imports

// #region mocks
jest.mock('../../../shared/loading/LoadingIndicator', () => 'LoadingIndicator');
jest.mock('../components/LoginForm', () => 'LoginForm');
jest.mock('../../../../infrastructure/actions', () => ({}));
// #endregion mocks

const createTestProps = (propOverrides) => ({
	submitUserLogin: jest.fn(),
	...propOverrides
});

const createTestState = (stateOverrides) => ({
	loading: {
		loginLoading: false
	},
	errors: {
		loginError: null
	},
	...stateOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const state = createTestState();
			const jsx = <Login {...props} />;
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot with loading indicator', () => {
			const props = createTestProps();
			const state = createTestState({
				loading: {
					loginLoading: true
				}
			});
			const jsx = <Login {...props} />;
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot with error message', () => {
			const props = createTestProps();
			const state = createTestState({
				errors: {
					loginError: 'An unknown error occurred.'
				}
			});
			const jsx = <Login {...props} />;
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
	});
});

describe('behavior', () => {
	describe('handleLoginSubmit', () => {
		it('should be called when form is submitted', () => {
			const submitUserLogin = jest.fn();
			const props = createTestProps({
				submitUserLogin
			});
			const state = createTestState();
			const jsx = <Login {...props} />;
			const element = shallowWithState(jsx, state).dive();
			const form = getSpecWrapper(element, 'login-form-container');
			form.props().onValidSubmit();
			expect(submitUserLogin).toHaveBeenCalledTimes(1);
		});
	});
	describe('handleInputChange', () => {
		it('should handle text field update', () => {
			const event = {
				target: {
					type: 'text',
					name: 'username',
					value: 'my-username'
				}
			};
			const submitUserLogin = jest.fn();
			const props = createTestProps({
				submitUserLogin
			});
			const state = createTestState();
			const jsx = <Login {...props} />;
			const element = shallowWithState(jsx, state).dive();
			element.instance().handleInputChange(event);
			const form = getSpecWrapper(element, 'login-form-container');
			form.props().onValidSubmit();
			expect(submitUserLogin).toHaveBeenCalledTimes(1);
			expect(submitUserLogin).toHaveBeenLastCalledWith({
				username: 'my-username'
			});
		});
	});
});
