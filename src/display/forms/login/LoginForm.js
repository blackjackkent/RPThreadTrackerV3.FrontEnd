import React from 'react';
import PropTypes from 'prop-types';
import { AvField } from 'availity-reactstrap-validation';
import validator from './_validator';

const propTypes = {
	handleInputChange: PropTypes.func.isRequired
};

const LoginForm = (props) => {
	const { handleInputChange } = props;
	return (
		<div>
			<div data-spec="username-field">
				<AvField
					name="Username"
					placeholder="Username"
					type="text"
					onChange={handleInputChange}
					validate={validator.username}
				/>
			</div>
			<div data-spec="password-field">
				<AvField
					name="Password"
					placeholder="Password"
					type="password"
					onChange={handleInputChange}
					validate={validator.password}
				/>
			</div>
		</div>
	);
};

LoginForm.propTypes = propTypes;
export default LoginForm;
