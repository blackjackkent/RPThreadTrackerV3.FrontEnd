// #region imports
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { useLoginMutation } from '~/infrastructure/hooks/mutations';
import { useFormReducer } from '~/infrastructure/hooks';
import cache from '~/infrastructure/cache';
import cacheKeys from '~/infrastructure/constants/cacheKeys';
import LoginForm from './components/LoginForm';
// #endregion imports

const propTypes = {
	history: PropTypes.shape({ push: PropTypes.func }).isRequired
};

function Login() {
	const [state, onInputChange] = useFormReducer();
	const { mutate, reset, isLoading, isError, isSuccess, data, error } = useLoginMutation();

	const onSubmit = () => {
		reset();
		mutate({ username: state.username, password: state.password });
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
