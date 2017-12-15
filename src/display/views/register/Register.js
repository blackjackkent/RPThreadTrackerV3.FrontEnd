import React from 'react';
import { Card, CardBlock, Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';

const Register = () => (
	<Card className="mx-4">
		<CardBlock className="p-4">
			<h1>Register</h1>
			<p className="text-muted">Create your RPThreadTracker account</p>
			<InputGroup className="mb-3">
				<InputGroupAddon><i className="icon-user" /></InputGroupAddon>
				<Input type="text" placeholder="Username" />
			</InputGroup>
			<InputGroup className="mb-3">
				<InputGroupAddon>@</InputGroupAddon>
				<Input type="text" placeholder="Email" />
			</InputGroup>
			<InputGroup className="mb-3">
				<InputGroupAddon><i className="icon-lock" /></InputGroupAddon>
				<Input type="password" placeholder="Password" />
			</InputGroup>
			<InputGroup className="mb-4">
				<InputGroupAddon><i className="icon-lock" /></InputGroupAddon>
				<Input type="password" placeholder="Repeat password" />
			</InputGroup>
			<Button color="primary" className="px-4">Create Account</Button>
			<span className="pull-right text-muted">
				Already have an account?
				<a href="/login">Login</a>
			</span>
		</CardBlock>
	</Card>
);

export default Register;
