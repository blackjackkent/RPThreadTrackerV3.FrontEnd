import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import Tooltip from 'rc-tooltip';
import validator from './_validator';
import formData from './_formData';
import useValidatedForm from '../validated-form/useValidatedForm';
import ValidatedTextInput from '../validated-form/ValidatedTextInput';

const propTypes = {
	onSubmit: PropTypes.func.isRequired,
	tooltipDisplayData: PropTypes.shape({
		password: PropTypes.bool
	}).isRequired,
	showTooltip: PropTypes.func.isRequired,
	hideTooltip: PropTypes.func.isRequired
};

const RegisterForm = (props) => {
	const { onSubmit, tooltipDisplayData, showTooltip, hideTooltip } = props;
	const { onFormSubmit, inputProps } = useValidatedForm(onSubmit, validator);
	return (
		<form onSubmit={onFormSubmit(onSubmit)}>
			<div>
				<div className="form-group">
					<ValidatedTextInput name="username" placeholder="Username" {...inputProps} />
				</div>
				<div className="form-group">
					<ValidatedTextInput
						name="email"
						placeholder="Email"
						{...inputProps}
						type="email"
					/>
				</div>
				<div className="form-group">
					<Tooltip
						visible={tooltipDisplayData.password}
						overlay={formData.password.tooltip}
						overlayStyle={{
							width: 300
						}}
						align={{
							offset: [0, 10]
						}}
						placement="top"
					>
						<ValidatedTextInput
							name="password"
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
						name="confirmPassword"
						placeholder="Confirm Password"
						{...inputProps}
						type="password"
					/>
				</div>
			</div>

			<Row>
				<Col xs="6">
					<Button color="primary" className="px-4">
						Create Account
					</Button>
				</Col>
				<Col xs="6" className="text-right text-muted">
					Already have an account?{' '}
					<Link href="/login" to="/login">
						Login
					</Link>
				</Col>
			</Row>
		</form>
	);
};

RegisterForm.propTypes = propTypes;
export default RegisterForm;
