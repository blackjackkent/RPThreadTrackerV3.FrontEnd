import React from 'react';
import { TabPane, Form, FormGroup, Col, Label, Row, Input, Button, Card, CardHeader, CardBlock } from 'reactstrap';

const ChangePasswordPane = () => (
	<TabPane tabId="change-password">
		<Card>
			<CardHeader>
				<i
					className="fas fa-key"
				/> Change Password
			</CardHeader>
			<CardBlock className="card-body">
				<Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
					<FormGroup row>
						<Col xs="12" lg="3">
							<Label htmlFor="current-password">Current Password:</Label>
						</Col>
						<Col xs="12" lg="9">
							<Input
								type="password"
								id="current-password"
								name="current-password"
								placeholder="Enter Current Password"
							/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Col xs="12" lg="3">
							<Label htmlFor="new-password">New Password:</Label>
						</Col>
						<Col xs="12" lg="9">
							<Input
								type="password"
								id="new-password"
								name="new-password"
								placeholder="Enter New Password"
							/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Col xs="12" lg="3">
							<Label htmlFor="confirm-new-password">Confirm New Password:</Label>
						</Col>
						<Col xs="12" lg="9">
							<Input
								type="password"
								id="confirm-new-password"
								name="confirm-new-password"
								placeholder="Confirm New Password"
							/>
						</Col>
					</FormGroup>
				</Form>
				<Row>
					<Col className="text-right">
						<Button type="submit" color="primary">
							Submit
						</Button>
					</Col>
				</Row>
			</CardBlock>
		</Card>
	</TabPane>
);

export default ChangePasswordPane;
