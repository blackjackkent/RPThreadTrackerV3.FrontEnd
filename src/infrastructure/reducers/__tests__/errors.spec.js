import errors from '../errors';
import * as actions from '../../actions';

const getState = (overrides) => ({
	loginError: null,
	registrationErrors: [],
	forgotPasswordError: null,
	resetPasswordError: null,
	...overrides
});

describe('action handling', () => {
	it('should set initial state', () => {
		const result = errors(undefined, {});
		expect(result).toEqual(getState());
	});
	it('should handle SUBMIT_USER_LOGIN_SUCCESS', () => {
		const initialState = getState({
			loginError: 'Login error'
		});
		const action = {
			type: actions.SUBMIT_USER_LOGIN_SUCCESS
		};
		const result = errors(initialState, action);
		expect(result).toEqual(getState());
	});
	it('should handle SUBMIT_USER_LOGIN', () => {
		const initialState = getState({
			loginError: 'Login error'
		});
		const action = {
			type: actions.SUBMIT_USER_LOGIN
		};
		const result = errors(initialState, action);
		expect(result).toEqual(getState());
	});
	it('should handle SUBMIT_USER_REGISTRATION_SUCCESS', () => {
		const initialState = getState({
			registrationErrors: ['Registration error']
		});
		const action = {
			type: actions.SUBMIT_USER_REGISTRATION_SUCCESS
		};
		const result = errors(initialState, action);
		expect(result).toEqual(getState());
	});
	it('should handle SUBMIT_USER_REGISTRATION', () => {
		const initialState = getState({
			registrationErrors: ['Registration error']
		});
		const action = {
			type: actions.SUBMIT_USER_REGISTRATION
		};
		const result = errors(initialState, action);
		expect(result).toEqual(getState());
	});
	it('should handle SUBMIT_USER_FORGOT_PASSWORD_SUCCESS', () => {
		const initialState = getState({
			forgotPasswordError: 'Forgot password error'
		});
		const action = {
			type: actions.SUBMIT_USER_FORGOT_PASSWORD_SUCCESS
		};
		const result = errors(initialState, action);
		expect(result).toEqual(getState());
	});
	it('should handle SUBMIT_USER_FORGOT_PASSWORD', () => {
		const initialState = getState({
			forgotPasswordError: 'Forgot password error'
		});
		const action = {
			type: actions.SUBMIT_USER_FORGOT_PASSWORD
		};
		const result = errors(initialState, action);
		expect(result).toEqual(getState());
	});
	it('should handle SUBMIT_USER_RESET_PASSWORD_SUCCESS', () => {
		const initialState = getState({
			resetPasswordError: 'Reset password error'
		});
		const action = {
			type: actions.SUBMIT_USER_RESET_PASSWORD_SUCCESS
		};
		const result = errors(initialState, action);
		expect(result).toEqual(getState());
	});
	it('should handle SUBMIT_USER_RESET_PASSWORD', () => {
		const initialState = getState({
			resetPasswordError: 'Reset password error'
		});
		const action = {
			type: actions.SUBMIT_USER_RESET_PASSWORD
		};
		const result = errors(initialState, action);
		expect(result).toEqual(getState());
	});
	it('should handle SUBMIT_USER_LOGIN_FAILURE', () => {
		const expectedState = getState({
			loginError: 'Login error'
		});
		const action = {
			type: actions.SUBMIT_USER_LOGIN_FAILURE,
			data: 'Login error'
		};
		const result = errors(getState(), action);
		expect(result).toEqual(expectedState);
	});
	it('should handle SUBMIT_USER_REGISTRATION_FAILURE', () => {
		const expectedState = getState({
			registrationErrors: ['Registration error']
		});
		const action = {
			type: actions.SUBMIT_USER_REGISTRATION_FAILURE,
			data: ['Registration error']
		};
		const result = errors(getState(), action);
		expect(result).toEqual(expectedState);
	});
	it('should handle SUBMIT_USER_FORGOT_PASSWORD_FAILURE', () => {
		const expectedState = getState({
			forgotPasswordError: 'Forgot password error'
		});
		const action = {
			type: actions.SUBMIT_USER_FORGOT_PASSWORD_FAILURE,
			data: 'Forgot password error'
		};
		const result = errors(getState(), action);
		expect(result).toEqual(expectedState);
	});
	it('should handle SUBMIT_USER_RESET_PASSWORD_FAILURE', () => {
		const expectedState = getState({
			resetPasswordError: 'Reset password error'
		});
		const action = {
			type: actions.SUBMIT_USER_RESET_PASSWORD_FAILURE,
			data: 'Reset password error'
		};
		const result = errors(getState(), action);
		expect(result).toEqual(expectedState);
	});
	it('should handle SUBMIT_USER_RESET_PASSWORD_FAILURE', () => {
		const expectedState = getState({
			resetPasswordError: 'Reset password error'
		});
		const action = {
			type: actions.SUBMIT_USER_RESET_PASSWORD_FAILURE,
			data: 'Reset password error'
		};
		const result = errors(getState(), action);
		expect(result).toEqual(expectedState);
	});
	it('should handle SUBMIT_USER_LOGOUT', () => {
		const initialState = getState({
			resetPasswordError: 'Reset password error'
		});
		const action = {
			type: actions.SUBMIT_USER_LOGOUT
		};
		const result = errors(initialState, action);
		expect(result).toEqual(getState());
	});
});
