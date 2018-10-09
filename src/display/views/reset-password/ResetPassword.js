import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AvForm } from 'availity-reactstrap-validation';
import {
	CardBlock, Button, Row, Col
} from 'reactstrap';
import * as actions from '../../../infrastructure/actions';
import TooltipForm from '../../forms/TooltipForm';
import Card from '../../shared/styled/Card';
import LoadingIndicator from '../../shared/loading/LoadingIndicator';
import ResetPasswordForm from '../../forms/reset-password/ResetPasswordForm';
import { getQuery } from '../../../utility';

const propTypes = {
	displayLoadingIndicator: PropTypes.bool.isRequired,
	resetPasswordError: PropTypes.string,
	submitUserResetPassword: PropTypes.func.isRequired
};
const defaultProps = {
	resetPasswordError: ''
};

const mapStateToProps = (state) => {
	const {
		loading,
		errors
	} = state;
	return {
		displayLoadingIndicator: loading.resetPasswordLoading,
		resetPasswordError: errors.resetPasswordError
	};
};

class ResetPassword extends Component {
	constructor(props) {
		super(props);
		this.handleResetPasswordSubmit = this.handleResetPasswordSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.state = {
			resetPasswordRequest: {
				Email: getQuery().email,
				Code: getQuery().code
			}
		};
	}

	handleResetPasswordSubmit() {
		const { submitUserResetPassword } = this.props;
		const { resetPasswordRequest } = this.state;
		submitUserResetPassword(resetPasswordRequest);
	}

	handleInputChange(event) {
		const { target } = event;
		const { name, value } = target;
		this.setState(prevState => ({
			resetPasswordRequest: Object.assign({}, prevState.resetPasswordRequest, {
				[name]: value
			})
		}));
	}

	render() {
		const { displayLoadingIndicator, resetPasswordError } = this.props;
		let loading = (<span />);
		if (displayLoadingIndicator) {
			loading = (
				<LoadingIndicator style={{
					width: 50,
					height: 50,
					position: 'absolute',
					top: 0,
					right: 0
				}}
				/>
			);
		}
		let error = (<span />);
		if (resetPasswordError) {
			error = (
				<div className="has-danger">
					<p
						data-spec="reset-password-server-error"
						className="form-control-feedback"
					>
						{resetPasswordError}
					</p>
				</div>
			);
		}
		return (
			<Card className="mx-4">
				<CardBlock className="p-4">
					{loading}
					<AvForm
						data-spec="reset-password-form-container"
						onValidSubmit={this.handleResetPasswordSubmit}
					>
						<h1>Reset Password</h1>
						<p className="text-muted">
							Enter your new password below.
						</p>
						{error}
						<TooltipForm
							Renderable={ResetPasswordForm}
							handleInputChange={this.handleInputChange}
						/>
						<Row>
							<Col xs="6">
								<Button color="primary" className="px-4">Request</Button>
							</Col>
							<Col xs="6" className="text-right text-muted">
								<span className="pull-right"><Link href="/login" to="/login">Back to Login</Link></span>

							</Col>
						</Row>
					</AvForm>
				</CardBlock>
			</Card>
		);
	}
}
ResetPassword.propTypes = propTypes;
ResetPassword.defaultProps = defaultProps;
export default connect(mapStateToProps, {
	submitUserResetPassword: actions.submitUserResetPassword
})(ResetPassword);
