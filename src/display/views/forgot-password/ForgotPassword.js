import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AvForm } from 'availity-reactstrap-validation';
import { CardBody, Button, Row, Col } from 'reactstrap';
import * as actions from '../../../infrastructure/actions';
import Card from '../../shared/styled/Card';
import LoadingIndicator from '../../shared/loading/LoadingIndicator';
import ForgotPasswordForm from '../../forms/forgot-password/ForgotPasswordForm';

const propTypes = {
	displayLoadingIndicator: PropTypes.bool.isRequired,
	forgotPasswordError: PropTypes.string,
	submitUserForgotPassword: PropTypes.func.isRequired
};
const defaultProps = {
	forgotPasswordError: ''
};

const mapStateToProps = (state) => {
	const { loading, errors } = state;
	return {
		displayLoadingIndicator: loading.forgotPasswordLoading,
		forgotPasswordError: errors.forgotPasswordError
	};
};

class ForgotPassword extends Component {
	constructor(props) {
		super(props);
		this.handleForgotPasswordSubmit = this.handleForgotPasswordSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.state = {
			forgotPasswordRequest: {}
		};
	}

	handleForgotPasswordSubmit() {
		const { submitUserForgotPassword } = this.props;
		const { forgotPasswordRequest } = this.state;
		submitUserForgotPassword(forgotPasswordRequest);
	}

	handleInputChange(event) {
		const { target } = event;
		const { name, value } = target;
		this.setState((prevState) => ({
			forgotPasswordRequest: Object.assign({}, prevState.forgotPasswordRequest, {
				[name]: value
			})
		}));
	}

	render() {
		const { displayLoadingIndicator, forgotPasswordError } = this.props;
		let loading = <span />;
		if (displayLoadingIndicator) {
			loading = (
				<LoadingIndicator
					style={{
						width: 50,
						height: 50,
						position: 'absolute',
						top: 0,
						right: 0
					}}
				/>
			);
		}
		let error = <span />;
		if (forgotPasswordError) {
			error = (
				<div className="has-danger">
					<p className="form-control-feedback">{forgotPasswordError}</p>
				</div>
			);
		}
		return (
			<Card className="mx-4">
				<CardBody className="p-4">
					{loading}
					<AvForm
						data-spec="forgot-password-form-container"
						onValidSubmit={this.handleForgotPasswordSubmit}
					>
						<h1>Forgot your password?</h1>
						<p className="text-muted">
							Enter your email address below and we will email you a link to reset
							your password.
						</p>
						{error}
						<ForgotPasswordForm handleInputChange={this.handleInputChange} />
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
					</AvForm>
				</CardBody>
			</Card>
		);
	}
}
ForgotPassword.propTypes = propTypes;
ForgotPassword.defaultProps = defaultProps;
export default connect(mapStateToProps, {
	submitUserForgotPassword: actions.submitUserForgotPassword
})(ForgotPassword);
