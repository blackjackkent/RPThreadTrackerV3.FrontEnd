// #region imports
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import validator from './_validator';
import useValidatedForm from '../validated-form/useValidatedForm';
import ValidatedTextInput from '../validated-form/ValidatedTextInput';
// #endregion imports

const propTypes = {
	onSubmit: PropTypes.func.isRequired
};

const ForgotPasswordForm = ({ onSubmit }) => {
	const { onFormSubmit, inputProps } = useValidatedForm(onSubmit, validator);
	return (
		<form onSubmit={onFormSubmit}>
			<div className="form-group">
				<ValidatedTextInput name="email" placeholder="Email" {...inputProps} type="email" />
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
		</form>
	);
};

ForgotPasswordForm.propTypes = propTypes;
export default ForgotPasswordForm;
