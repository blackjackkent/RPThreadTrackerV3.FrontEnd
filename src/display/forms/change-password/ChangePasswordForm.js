import React from 'react';
import PropTypes from 'prop-types';
import { AvField } from 'availity-reactstrap-validation';
import { FormGroup, Col, Label } from 'reactstrap';
import validator from './_validator';

const propTypes = {
	handleInputChange: PropTypes.func.isRequired
};

const ChangePasswordForm = (props) => {
	const {
		handleInputChange
	} = props;
	return (
		<div>
			<FormGroup row>
				<Col xs="12" lg="3">
					<Label
						data-spec="current-password-label"
						htmlFor="current-password"
					>
						Current Password:
					</Label>
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
					<Label htmlFor="new-password" data-spec="new-password-label">New Password:</Label>
				</Col>
				<Col xs="12" lg="9">
					<AvField
						data-spec="new-password-field"
						name="newPassword"
						placeholder="New Password"
						type="password"
						onChange={handleInputChange}
						validate={validator.newPassword}
					/>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Col xs="12" lg="3">
					<Label
						htmlFor="confirm-new-password"
						data-spec="confirm-new-password-label"
					>
						Confirm New Password:
					</Label>
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
