import React from 'react';
import PropTypes from 'prop-types';
import { AvField } from 'availity-reactstrap-validation';
import validator from './_validator';

const propTypes = {
	handleInputChange: PropTypes.func.isRequired
};

const RegisterForm = (props) => {
	const {
		handleInputChange
	} = props;
	return (
		<div>
			<AvField
				name="username"
				placeholder="Username"
				type="text"
				onChange={handleInputChange}
				validate={validator.username}
			/>
			<AvField
				name="email"
				placeholder="Email"
				type="email"
				onChange={handleInputChange}
				validate={validator.email}
			/>
			<AvField
				name="password"
				placeholder="Password"
				type="password"
				onChange={handleInputChange}
				validate={validator.password}
			/>
			<AvField
				name="confirmPassword"
				placeholder="Confirm Password"
				type="password"
				onChange={handleInputChange}
				validate={validator.confirmPassword}
			/>
		</div>
	);
};

RegisterForm.propTypes = propTypes;
export default RegisterForm;
