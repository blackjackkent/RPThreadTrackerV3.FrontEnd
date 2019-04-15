// #region imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
	Row, Col, CardBody, Button
} from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginForm from '../../forms/login/LoginForm';
import * as actions from '../../../infrastructure/actions';
import Card from '../../shared/styled/Card';
import LoadingIndicator from '../../shared/loading/LoadingIndicator';
// #endregion imports

const propTypes = {
	submitUserLogin: PropTypes.func.isRequired,
	displayLoadingIndicator: PropTypes.bool.isRequired,
	loginError: PropTypes.string
};
const defaultProps = {
	loginError: ''
};

const mapStateToProps = (state) => {
	const {
		loading,
		errors
	} = state;
	return {
		displayLoadingIndicator: loading.loginLoading,
		loginError: errors.loginError
	};
};

class Login extends Component {
	constructor(props) {
		super(props);
		this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.state = {
			loginRequest: {}
		};
	}

	handleLoginSubmit() {
		const { submitUserLogin } = this.props;
		const { loginRequest } = this.state;
		submitUserLogin(loginRequest);
	}

	handleInputChange(event) {
		const { target } = event;
		const { name, value } = target;
		this.setState(prevState => ({
			loginRequest: Object.assign({}, prevState.loginRequest, {
				[name]: value
			})
		}));
	}

	render() {
		const { displayLoadingIndicator, loginError } = this.props;
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
		if (loginError) {
			error = (
				<div className="has-danger">
					<p data-spec="login-server-error" className="form-control-feedback">{loginError}</p>
				</div>
			);
		}
		return (
			<Card className="login-box p-4">
				<CardBody className="card-body">
					{loading}
					<AvForm
						data-spec="login-form-container"
						onValidSubmit={this.handleLoginSubmit}
					>
						<h1>Login</h1>
						<p className="text-muted">Sign in to RPThreadTracker</p>
						{error}
						<LoginForm handleInputChange={this.handleInputChange} />
						<Row>
							<Col xs="6">
								<Button color="primary" className="px-4">Login</Button>

							</Col>
							<Col xs="6" className="text-right text-muted">
								<Link href="/register" to="/register">Sign up</Link> &bull; {' '}
								<Link href="/forgotpassword" to="/forgotpassword">Forgot password?</Link>
							</Col>
						</Row>
					</AvForm>
				</CardBody>
			</Card>
		);
	}
}
Login.propTypes = propTypes;
Login.defaultProps = defaultProps;
export default connect(mapStateToProps, {
	submitUserLogin: actions.submitUserLogin
})(Login);
