import React from 'react';
import PropTypes from 'prop-types';
import { AvField } from 'availity-reactstrap-validation';
import validator from './_validator';

const propTypes = {
	handleInputChange: PropTypes.func.isRequired
};

const RegisterForm = (props) => {
	const { handleInputChange } = props;
	return (
		<div>
			<AvField
				name="username"
				placeholder="Username"
				type="text"
				onChange={handleInputChange}
				validate={validator.username}
				data-spec="username-field"
			/>
			<AvField
				name="email"
				placeholder="Email"
				type="email"
				onChange={handleInputChange}
				validate={validator.email}
				data-spec="email-field"
			/>
			<AvField
				name="password"
				placeholder="Password"
				type="password"
				onChange={handleInputChange}
				validate={validator.password}
				data-spec="password-field"
			/>
			<AvField
				name="confirmPassword"
				placeholder="Confirm Password"
				type="password"
				onChange={handleInputChange}
				validate={validator.confirmPassword}
				data-spec="confirm-password-field"
			/>
		</div>
	);
};

RegisterForm.propTypes = propTypes;
export default RegisterForm;
