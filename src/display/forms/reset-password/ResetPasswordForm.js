import React from 'react';
import PropTypes from 'prop-types';
import { AvField } from 'availity-reactstrap-validation';
import validator from './_validator';

const propTypes = {
	handleInputChange: PropTypes.func.isRequired
};

const ResetPasswordForm = (props) => {
	const { handleInputChange } = props;
	return (
		<div>
			<AvField
				name="newPassword"
				placeholder="Password"
				type="password"
				onChange={handleInputChange}
				validate={validator.newPassword}
				data-spec="new-password-field"
			/>
			<AvField
				name="confirmNewPassword"
				placeholder="Confirm Password"
				type="password"
				onChange={handleInputChange}
				validate={validator.confirmNewPassword}
				data-spec="confirm-new-password-field"
			/>
		</div>
	);
};

ResetPasswordForm.propTypes = propTypes;
export default ResetPasswordForm;
