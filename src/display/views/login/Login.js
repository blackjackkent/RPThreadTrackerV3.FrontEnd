// #region imports
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useLoginMutation } from '~/infrastructure/hooks/mutations';
import LoginForm from './components/LoginForm';
// #endregion imports

const Login = () => {
	const { submitLogin, reset, isLoading, isError, isSuccess, error } = useLoginMutation();
	const onSubmit = async (data) => {
		reset();
		submitLogin({ username: data.username, password: data.password });
	};
	if (isSuccess) {
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
			onSubmit={onSubmit}
		/>
	);
};
export default Login;
