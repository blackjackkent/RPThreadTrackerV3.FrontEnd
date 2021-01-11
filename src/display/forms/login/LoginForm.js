import React from 'react';
import PropTypes from 'prop-types';
import { AvField } from 'availity-reactstrap-validation';
import validator from '../../views/login/_loginFormValidator';

const propTypes = {
	handleInputChange: PropTypes.func.isRequired
};

const LoginForm = (props) => {
	const { onUsernameChange } = props;
	return (
		
	);
};

LoginForm.propTypes = propTypes;
export default LoginForm;
