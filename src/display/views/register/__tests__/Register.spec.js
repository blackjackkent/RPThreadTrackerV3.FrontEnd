// #region imports
import React from 'react';
import { getSpecWrapper, shallowWithState } from '~/testhelpers/helpers.unit';
import Register from '../Register';
// #endregion imports

// #region mocks
jest.mock('../../../forms/TooltipForm', () => 'TooltipForm');
jest.mock('../../../shared/loading/LoadingIndicator', () => 'LoadingIndicator');
jest.mock('../../../forms/register/RegisterForm', () => 'RegisterForm');
jest.mock('../../../../infrastructure/actions', () => ({}));
// #endregion mocks

const createTestProps = (propOverrides) => ({
	submitUserRegistration: jest.fn(),
	...propOverrides
});

const createTestState = (stateOverrides) => ({
	loading: {
		loginLoading: false,
		registrationLoading: false
	},
	errors: {
		registrationErrors: []
	},
	...stateOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const state = createTestState();
			const jsx = <Register {...props} />;
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot with loading indicator when registration loading', () => {
			const props = createTestProps();
			const state = createTestState({
				loading: {
					registrationLoading: true,
					loginLoading: false
				}
			});
			const jsx = <Register {...props} />;
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot with loading indicator when login loading', () => {
			const props = createTestProps();
			const state = createTestState({
				loading: {
					loginLoading: true,
					registrationLoading: false
				}
			});
			const jsx = <Register {...props} />;
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot with error message', () => {
			const props = createTestProps();
			const state = createTestState({
				errors: {
					registrationErrors: ['An unknown error occurred.']
				}
			});
			const jsx = <Register {...props} />;
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
	});
});

describe('behavior', () => {
	describe('handleRegistrationSubmit', () => {
		it('should be called when form is submitted', () => {
			const submitUserRegistration = jest.fn();
			const props = createTestProps({
				submitUserRegistration
			});
			const state = createTestState();
			const jsx = <Register {...props} />;
			const element = shallowWithState(jsx, state).dive();
			const form = getSpecWrapper(element, 'registration-form-container');
			form.props().onValidSubmit();
			expect(submitUserRegistration).toHaveBeenCalledTimes(1);
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
			const submitUserRegistration = jest.fn();
			const props = createTestProps({
				submitUserRegistration
			});
			const state = createTestState();
			const jsx = <Register {...props} />;
			const element = shallowWithState(jsx, state).dive();
			element.instance().handleInputChange(event);
			const form = getSpecWrapper(element, 'registration-form-container');
			form.props().onValidSubmit();
			expect(submitUserRegistration).toHaveBeenCalledTimes(1);
			expect(submitUserRegistration).toHaveBeenLastCalledWith({
				username: 'my-username'
			});
		});
	});
});
