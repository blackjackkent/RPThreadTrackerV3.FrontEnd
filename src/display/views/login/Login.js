// #region imports
import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { useLoginMutation } from '~/infrastructure/hooks/mutations';
import cache from '~/infrastructure/cache';
import cacheKeys from '~/infrastructure/constants/cacheKeys';
import LoginForm from './components/LoginForm';
// #endregion imports

const propTypes = {
	history: PropTypes.shape({ push: PropTypes.func }).isRequired
};

const initialState = {
	username: '',
	password: ''
};
const reducer = (state, action) => {
	switch (action.type) {
		case 'username':
			return {
				...state,
				username: action.data
			};
		case 'password':
			return {
				...state,
				password: action.data
			};
		default:
			return state;
	}
};

function Login() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { mutate, reset, isLoading, isError, isSuccess, data, error } = useLoginMutation();

	const onSubmit = () => {
		reset();
		mutate({ username: state.username, password: state.password });
	};

	const onInputChange = (event) => {
		dispatch({ type: event.target.name, data: event.target.value });
	};

	if (isSuccess) {
		cache.set(cacheKeys.ACCESS_TOKEN, data.data.token.token);
		cache.set(cacheKeys.REFRESH_TOKEN, data.data.refreshToken.token);
		return (
			<div>
				<Redirect to="/dashboard" />
			</div>
		);
	}

	return (
		<LoginForm
			isLoading={isLoading}
			errorMessage={isError ? error.response.data : ''}
			onInputChange={onInputChange}
			onSubmit={onSubmit}
		/>
	);
}
Login.propTypes = propTypes;
export default Login;
