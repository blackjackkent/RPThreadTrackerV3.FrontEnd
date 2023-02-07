// #region imports
import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Row, Col, Label, Button } from 'reactstrap';
import Tooltip from 'rc-tooltip';
import validator from './_validator';
import formData from './_formData';
import useValidatedForm from '../validated-form/useValidatedForm';
import ValidatedTextInput from '../validated-form/ValidatedTextInput';
// #endregion imports

const propTypes = {
	onSubmit: PropTypes.func.isRequired,
	tooltipDisplayData: PropTypes.shape({
		newPassword: PropTypes.bool
	}).isRequired,
	showTooltip: PropTypes.func.isRequired,
	hideTooltip: PropTypes.func.isRequired
};

const ChangePasswordForm = (props) => {
	const { onSubmit, tooltipDisplayData, showTooltip, hideTooltip } = props;
	const { onFormSubmit, inputProps } = useValidatedForm(onSubmit, validator);
	return (
		<form onSubmit={onFormSubmit}>
			<div>
				<FormGroup row>
					<Col xs="12" lg="3">
						<Label htmlFor="current-password">Current Password:</Label>
					</Col>
					<Col xs="12" lg="9">
						<ValidatedTextInput
							name="currentPassword"
							placeholder="Current Password"
							type="password"
							{...inputProps}
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
						>
							<ValidatedTextInput
								name="newPassword"
								placeholder="Password"
								type="password"
								{...inputProps}
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
						<ValidatedTextInput
							name="confirmNewPassword"
							placeholder="Confirm New Password"
							type="password"
							{...inputProps}
						/>
					</Col>
				</FormGroup>
				<Row>
					<Col className="text-right">
						<Button type="submit" color="primary">
							Submit
						</Button>
					</Col>
				</Row>
			</div>
		</form>
	);
};

ChangePasswordForm.propTypes = propTypes;
export default ChangePasswordForm;
