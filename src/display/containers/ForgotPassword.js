import React from 'react';
import { Container, Row, Col, Card, CardBlock, Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';

const ForgotPassword = () => (
	<div className="app flex-row align-items-center">
		<Container>
			<Row className="justify-content-center">
				<Col md="6">
					<Card className="mx-4">
						<CardBlock className="p-4">
							<h1>Forgot your password?</h1>
							<p className="text-muted">
								Enter your username or email address below
								and we will email you a replacement password.
							</p>
							<InputGroup className="mb-3">
								<InputGroupAddon><i className="icon-user" /></InputGroupAddon>
								<Input type="text" placeholder="Username/Email" />
							</InputGroup>
							<Button color="primary" className="px-4">Request</Button>
							<span className="pull-right"><a href="/login">Back to Login</a></span>
						</CardBlock>
					</Card>
				</Col>
			</Row>
		</Container>
	</div>
);

export default ForgotPassword;
