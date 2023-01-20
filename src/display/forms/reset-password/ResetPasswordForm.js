import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Row, Col } from 'reactstrap';
import Tooltip from 'rc-tooltip';
import validator from './_validator';
import formData from './_formData';
import useValidatedForm from '../validated-form/useValidatedForm';
import ValidatedTextInput from '../validated-form/ValidatedTextInput';

const propTypes = {
	onSubmit: PropTypes.func.isRequired,
	tooltipDisplayData: PropTypes.shape({
		newPassword: PropTypes.bool
	}).isRequired,
	showTooltip: PropTypes.func.isRequired,
	hideTooltip: PropTypes.func.isRequired
};

const ResetPasswordForm = (props) => {
	const { onSubmit, tooltipDisplayData, showTooltip, hideTooltip } = props;
	const { onFormSubmit, inputProps } = useValidatedForm(onSubmit, validator);
	return (
		<form onSubmit={onFormSubmit}>
			<div>
				<div className="form-group">
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
							{...inputProps}
							onFocus={showTooltip}
							onBlur={hideTooltip}
							type="password"
						/>
					</Tooltip>
				</div>
				<div className="form-group">
					<ValidatedTextInput
						name="confirmNewPassword"
						placeholder="Confirm Password"
						{...inputProps}
						type="password"
					/>
				</div>

				<Row>
					<Col xs="6">
						<Button color="primary" className="px-4">
							Request
						</Button>
					</Col>
					<Col xs="6" className="text-right text-muted">
						<span className="pull-right">
							<Link href="/login" to="/login">
								Back to Login
							</Link>
						</span>
					</Col>
				</Row>
			</div>
		</form>
	);
};

ResetPasswordForm.propTypes = propTypes;
export default ResetPasswordForm;
