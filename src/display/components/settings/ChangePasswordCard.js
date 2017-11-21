import React from 'react';
import { Card, CardHeader, Label, Input, CardBlock, CardFooter, Form, FormGroup, Button, Col } from 'reactstrap';

const ChangePasswordCard = () => (
	<Card className="change-password">
		<CardHeader>
			<i className="fa fa-user" />Change Password
		</CardHeader>
		<CardBlock className="card-body">
			<Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
				<FormGroup row>
					<Col xs="12">
						<Label htmlFor="current-password">Current Password:</Label>
					</Col>
					<Col xs="12">
						<Input
							type="password"
							id="current-password"
							name="current-password"
							placeholder="Enter Current Password"
						/>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Col xs="12">
						<Label htmlFor="new-password">New Password:</Label>
					</Col>
					<Col xs="12">
						<Input
							type="password"
							id="new-password"
							name="new-password"
							placeholder="Enter New Password"
						/>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Col xs="12">
						<Label htmlFor="confirm-new-password">Confirm New Password:</Label>
					</Col>
					<Col xs="12">
						<Input
							type="password"
							id="confirm-new-password"
							name="confirm-new-password"
							placeholder="Confirm New Password"
						/>
					</Col>
				</FormGroup>
			</Form>
		</CardBlock>
		<CardFooter className="text-right">
			<Button type="submit" size="sm" color="primary">
				Submit
			</Button>
		</CardFooter>
	</Card>
);

export default ChangePasswordCard;
