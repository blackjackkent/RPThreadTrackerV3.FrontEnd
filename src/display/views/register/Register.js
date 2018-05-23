import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBlock, Button, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { AvForm } from 'availity-reactstrap-validation';
import { submitUserRegistration } from '../../../infrastructure/actions';
import RegisterForm from '../../forms/register/RegisterForm';
import LoadingIndicator from '../../shared/LoadingIndicator';

const propTypes = {
	submitUserRegistration: PropTypes.func.isRequired,
	isRegistrationLoading: PropTypes.bool.isRequired,
	isLoginLoading: PropTypes.bool.isRequired,
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
		isRegistrationLoading: loading.registrationLoading,
		isLoginLoading: loading.isLoginLoading,
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
		this.props.submitUserRegistration(this.state.registerRequest);
	}
	handleInputChange(event) {
		const { target } = event;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const { name } = target;
		this.setState({
			registerRequest: Object.assign({}, this.state.registerRequest, {
				[name]: value
			})
		});
	}
	render() {
		const { isRegistrationLoading, isLoginLoading, registrationErrors } = this.props;
		const displayLoadingIndicator = isRegistrationLoading || isLoginLoading;
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
					<AvForm onValidSubmit={this.handleRegistrationSubmit}>
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
	submitUserRegistration
})(Register);
