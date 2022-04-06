import React from 'react';
import PropTypes from 'prop-types';
import { AvField } from 'availity-reactstrap-validation';
import Tooltip from 'rc-tooltip';
import validator from './_validator';
import formData from './_formData';

const propTypes = {
	handleInputChange: PropTypes.func.isRequired,
	tooltipDisplayData: PropTypes.shape({
		newPassword: PropTypes.bool
	}).isRequired,
	showTooltip: PropTypes.func.isRequired,
	hideTooltip: PropTypes.func.isRequired
};

const ResetPasswordForm = (props) => {
	const { handleInputChange, tooltipDisplayData, showTooltip, hideTooltip } = props;
	return (
		<div>
			<div>
				<Tooltip
					visible={tooltipDisplayData.newPassword}
					overlay={formData.newPassword.tooltip}
					overlayStyle={{
						width: 300
					}}
					align={{
						offset: [0, 10]
					}}
					placement="top"
				>
					<AvField
						name="newPassword"
						placeholder="Password"
						type="password"
						onChange={handleInputChange}
						validate={validator.newPassword}
						onFocus={showTooltip}
						onBlur={hideTooltip}
					/>
				</Tooltip>
			</div>
			<div>
				<AvField
					name="confirmNewPassword"
					placeholder="Confirm Password"
					type="password"
					onChange={handleInputChange}
					validate={validator.confirmNewPassword}
				/>
			</div>
		</div>
	);
};

ResetPasswordForm.propTypes = propTypes;
export default ResetPasswordForm;
