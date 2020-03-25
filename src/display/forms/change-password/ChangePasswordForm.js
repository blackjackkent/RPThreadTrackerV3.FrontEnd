// #region imports
import React from 'react';
import PropTypes from 'prop-types';
import { AvField } from 'availity-reactstrap-validation';
import { FormGroup, Col, Label } from 'reactstrap';
import Tooltip from 'rc-tooltip';
import validator from './_validator';
import formData from './_formData';
// #endregion imports

const propTypes = {
	handleInputChange: PropTypes.func.isRequired,
	tooltipDisplayData: PropTypes.shape({}).isRequired,
	showTooltip: PropTypes.func.isRequired,
	hideTooltip: PropTypes.func.isRequired
};

const ChangePasswordForm = (props) => {
	const { handleInputChange, tooltipDisplayData, showTooltip, hideTooltip } = props;
	return (
		<div>
			<FormGroup row>
				<Col xs="12" lg="3">
					<Label htmlFor="current-password">Current Password:</Label>
				</Col>
				<Col xs="12" lg="9">
					<AvField
						data-spec="current-password-field"
						name="currentPassword"
						placeholder="Current Password"
						type="password"
						onChange={handleInputChange}
						validate={validator.currentPassword}
					/>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Col xs="12" lg="3">
					<Label htmlFor="new-password">New Password:</Label>
				</Col>
				<Col xs="12" lg="9">
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
						data-spec="newPassword-tooltip"
					>
						<AvField
							data-spec="new-password-field"
							name="newPassword"
							placeholder="Password"
							type="password"
							onChange={handleInputChange}
							validate={validator.newPassword}
							onFocus={showTooltip}
							onBlur={hideTooltip}
						/>
					</Tooltip>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Col xs="12" lg="3">
					<Label htmlFor="confirm-new-password">Confirm New Password:</Label>
				</Col>
				<Col xs="12" lg="9">
					<AvField
						data-spec="confirm-new-password-field"
						name="confirmNewPassword"
						placeholder="Confirm New Password"
						type="password"
						onChange={handleInputChange}
						validate={validator.confirmNewPassword}
					/>
				</Col>
			</FormGroup>
		</div>
	);
};

ChangePasswordForm.propTypes = propTypes;
export default ChangePasswordForm;
