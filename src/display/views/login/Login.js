// #region imports
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useLoginMutation } from '~/infrastructure/hooks/mutations';
import { useFormReducer } from '~/infrastructure/hooks';
import LoginForm from './components/LoginForm';
// #endregion imports

function Login() {
	const [state, onInputChange] = useFormReducer();
	const { submitLogin, reset, isLoading, isError, isSuccess, error } = useLoginMutation();
	const onSubmit = () => {
		reset();
		submitLogin({ username: state.username, password: state.password });
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
			onInputChange={onInputChange}
			onSubmit={onSubmit}
		/>
	);
}
export default Login;
