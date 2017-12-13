import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBlock, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';

import { loginValidator } from '../../infrastructure/validators';
import { submitUserLogin } from '../../infrastructure/actions';
import LoadingIndicator from '../shared/LoadingIndicator';

const mapStateToProps = (state) => {
	const {
		loading
	} = state;
	return {
		displayLoadingIndicator: loading.loginLoading
	};
}

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
		const { displayLoadingIndicator } = this.props;
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
		return (
			<div className="app flex-row align-items-center">
				<Container>
					<Row className="justify-content-center">
						<Col md="6">
							<Card className="login-box p-4">
								<CardBlock className="card-body">
									{loading}
									<AvForm onValidSubmit={this.handleLoginSubmit}>
										<h1>Login</h1>
										<p className="text-muted">Sign in to RPThreadTracker</p>
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
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
export default connect(mapStateToProps)(Login);
