// #region imports
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Col, Label, Row, Button } from 'reactstrap';
import validator from './_validator';
import useValidatedForm from '../validated-form/useValidatedForm';
import ValidatedTextInput from '../validated-form/ValidatedTextInput';
// #endregion imports

const propTypes = {
	onSubmit: PropTypes.func.isRequired,
	user: PropTypes.shape({
		userName: PropTypes.string,
		email: PropTypes.string
	}).isRequired
};

const UpdateAccountInfoForm = (props) => {
	const { onSubmit, user } = props;
	const { onFormSubmit, inputProps } = useValidatedForm(onSubmit, validator, user);
	return (
		<div>
			<form onSubmit={onFormSubmit}>
				<FormGroup row>
					<Col xs="12" lg="3">
						<Label htmlFor="userName">Username:</Label>
					</Col>
					<Col xs="12" lg="9">
						<ValidatedTextInput
							name="userName"
							placeholder="Username"
							{...inputProps}
						/>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Col xs="12" lg="3">
						<Label htmlFor="email">Email:</Label>
					</Col>
					<Col xs="12" lg="9">
						<ValidatedTextInput
							name="email"
							placeholder="Email"
							type="email"
							title="Update Email option coming soon!"
							{...inputProps}
							disabled
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
			</form>
		</div>
	);
};

UpdateAccountInfoForm.propTypes = propTypes;
export default UpdateAccountInfoForm;
