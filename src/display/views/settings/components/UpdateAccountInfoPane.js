import React from 'react';
import { TabPane, Row, Card, CardHeader, Label, Input, CardBlock, CardFooter, Form, FormGroup, Button, Col } from 'reactstrap';

const UpdateAccountInfoPane = (props) => {
	const { user } = props;
	return (
		<TabPane tabId="change-username">
			<Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
				<FormGroup row>
					<Col xs="12" md={{ size: 3 }}>
						<Label htmlFor="username">Username:</Label>
					</Col>
					<Col xs="12" md="6">
						<Input
							type="text"
							id="username"
							name="username"
							value={user.userName}
							placeholder="Enter Username"
						/>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Col xs="12" md={{ size: 3 }}>
						<Label htmlFor="email">Email:</Label>
					</Col>
					<Col xs="12" md="6">
						<Input
							type="email"
							id="email"
							name="email"
							value={user.email}
							placeholder="Enter Email"
						/>
					</Col>
				</FormGroup>
			</Form>
			<Row>
				<Col sm="12" md={{ size: 8 }} className="text-right">
					<Button type="submit" color="primary">
						Submit
						</Button>
				</Col>
			</Row>
		</TabPane>
	);
}

export default UpdateAccountInfoPane;
