import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Card, CardBlock, Button, Row, Col
} from 'reactstrap';
import { connect } from 'react-redux';
import { AvForm } from 'availity-reactstrap-validation';
import * as actions from '../../../infrastructure/actions';
import RegisterForm from '../../forms/register/RegisterForm';
import LoadingIndicator from '../../shared/LoadingIndicator';

const propTypes = {
	submitUserRegistration: PropTypes.func.isRequired,
	registrationLoading: PropTypes.bool.isRequired,
	loginLoading: PropTypes.bool.isRequired,
	registrationErrors: PropTypes.arrayOf(PropTypes.string)
};
const defaultProps = {
	registrationErrors: []
};
const mapStateToProps = (state) => {
	const {
		loading,
		errors
	} = state;
	return {
		registrationLoading: loading.registrationLoading,
		loginLoading: loading.loginLoading,
		registrationErrors: errors.registrationErrors
	};
};

class Register extends Component {
	constructor(props) {
		super(props);
		this.handleRegistrationSubmit = this.handleRegistrationSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.state = {
			registerRequest: {}
		};
	}

	handleRegistrationSubmit() {
		const { submitUserRegistration } = this.props;
		const { registerRequest } = this.state;
		submitUserRegistration(registerRequest);
	}

	handleInputChange(event) {
		const { target } = event;
		const { name, value } = target;
		this.setState(prevState => ({
			registerRequest: Object.assign({}, prevState.registerRequest, {
				[name]: value
			})
		}));
	}

	render() {
		const { registrationLoading, loginLoading, registrationErrors } = this.props;
		const displayLoadingIndicator = registrationLoading || loginLoading;
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
		if (registrationErrors.length) {
			const errorStrings = registrationErrors.map(e => (<span key={e}>{e}<br /></span>));
			error = (
				<div className="has-danger">
					<p data-spec="register-server-error" className="form-control-feedback">{errorStrings}</p>
				</div>
			);
		}
		return (
			<Card className="mx-4">
				<CardBlock className="p-4">
					{loading}
					<AvForm
						data-spec="registration-form-container"
						onValidSubmit={this.handleRegistrationSubmit}
					>
						<h1>Register</h1>
						<p className="text-muted">Create your RPThreadTracker account</p>
						{error}
						<RegisterForm handleInputChange={this.handleInputChange} />
						<Row>
							<Col xs="6">
								<Button color="primary" className="px-4">Create Account</Button>
							</Col>
							<Col xs="6" className="text-right text-muted">
								Already have an account? <a href="/login">Login</a>
							</Col>
						</Row>
					</AvForm>
				</CardBlock>
			</Card>
		);
	}
}

Register.propTypes = propTypes;
Register.defaultProps = defaultProps;
export default connect(mapStateToProps, {
	submitUserRegistration: actions.submitUserRegistration
})(Register);
