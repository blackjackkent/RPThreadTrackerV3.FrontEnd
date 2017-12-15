import React, { Component } from 'react';
import { Row, Col, Card, CardBlock, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loginValidator } from '../../../infrastructure/validators';
import { submitUserLogin } from '../../../infrastructure/actions';
import LoadingIndicator from '../../shared/LoadingIndicator';

const propTypes = {
	dispatch: PropTypes.func.isRequired,
	displayLoadingIndicator: PropTypes.bool.isRequired,
	loginError: PropTypes.string.isRequired
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
		const { dispatch } = this.props;
		dispatch(submitUserLogin(this.state.loginRequest));
	}
	handleInputChange(event) {
		const { target } = event;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const { name } = target;
		this.setState({
			loginRequest: Object.assign({}, this.state.loginRequest, {
				[name]: value
			})
		});
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
					<p className="form-control-feedback">{loginError}</p>
				</div>
			);
		}
		return (
			<Card className="login-box p-4">
				<CardBlock className="card-body">
					{loading}
					<AvForm onValidSubmit={this.handleLoginSubmit}>
						<h1>Login</h1>
						<p className="text-muted">Sign in to RPThreadTracker</p>
						{error}
						<AvField
							name="Username"
							placeholder="Username"
							type="text"
							onChange={this.handleInputChange}
							validate={loginValidator.username}
						/>
						<AvField
							name="Password"
							placeholder="Password"
							type="password"
							onChange={this.handleInputChange}
							validate={loginValidator.password}
						/>
						<Row>
							<Col xs="6">
								<Button color="primary" className="px-4">Login</Button>

							</Col>
							<Col xs="6" className="text-right text-muted">
								<a href="/register">Sign up</a> &bull; {' '}
								<a href="/forgotpassword">Forgot password?</a>
							</Col>
						</Row>
					</AvForm>
				</CardBlock>
			</Card>
		);
	}
}
Login.propTypes = propTypes;
export default connect(mapStateToProps)(Login);
