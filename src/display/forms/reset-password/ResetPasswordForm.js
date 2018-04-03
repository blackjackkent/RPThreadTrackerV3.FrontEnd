import React from 'react';
import PropTypes from 'prop-types';
import { AvField } from 'availity-reactstrap-validation';
import validator from './_validator';

const propTypes = {
	handleInputChange: PropTypes.func.isRequired
};

const ResetPasswordForm = (props) => {
	const {
		handleInputChange
	} = props;
	return (
		<div>
			<AvField
				name="newPassword"
				placeholder="Password"
				type="password"
				onChange={handleInputChange}
				validate={validator.newPassword}
			/>
			<AvField
				name="confirmNewPassword"
				placeholder="Confirm Password"
				type="password"
				onChange={handleInputChange}
				validate={validator.confirmNewPassword}
			/>
		</div>
	);
};

ResetPasswordForm.propTypes = propTypes;
export default ResetPasswordForm;
