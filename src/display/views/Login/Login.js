import React from 'react';
import { Container, Row, Col, Card, CardBlock, Button, Input, InputGroup } from 'reactstrap';

const Login = () => (
	<div className="app flex-row align-items-center">
		<Container>
			<Row className="justify-content-center">
				<Col md="6">
					<Card className="login-box p-4">
						<CardBlock className="card-body">
							<h1>Login</h1>
							<p className="text-muted">Sign In to your account</p>
							<InputGroup className="mb-3">
								<Input type="text" placeholder="Username" />
							</InputGroup>
							<InputGroup className="mb-4">
								<Input type="password" placeholder="Password" />
							</InputGroup>
							<Row>
								<Col xs="6">
									<Button color="primary" className="px-4">Login</Button>
								</Col>
								<Col xs="6" className="text-right">
									<Button color="link" className="px-0">Forgot password?</Button>
								</Col>
							</Row>
						</CardBlock>
					</Card>
				</Col>
			</Row>
		</Container>
	</div>
);

export default Login;
