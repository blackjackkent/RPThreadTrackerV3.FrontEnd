// #region imports
import React from 'react';
import PropTypes from 'prop-types';
import { AvField } from 'availity-reactstrap-validation';
import validator from './_validator';
// #endregion imports

const propTypes = {
	handleInputChange: PropTypes.func.isRequired
};

const ForgotPasswordForm = (props) => {
	const { handleInputChange } = props;
	return (
		<div>
			<div data-spec="email-field">
				<AvField
					name="Email"
					placeholder="Email"
					type="text"
					onChange={handleInputChange}
					validate={validator.email}
				/>
			</div>
		</div>
	);
};

ForgotPasswordForm.propTypes = propTypes;
export default ForgotPasswordForm;
