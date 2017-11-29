import React from 'react';
import { TabPane, Form, FormGroup, Col, Label, Row, Input, Button } from 'reactstrap';

const ChangePasswordPane = () => (
	<TabPane tabId="change-password">
		<Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
			<FormGroup row>
				<Col xs="12" md={{ size: 3 }}>
					<Label htmlFor="current-password">Current Password:</Label>
				</Col>
				<Col xs="12" md="6">
					<Input
						type="password"
						id="current-password"
						name="current-password"
						placeholder="Enter Current Password"
					/>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Col xs="12" md={{ size: 3 }}>
					<Label htmlFor="new-password">New Password:</Label>
				</Col>
				<Col xs="12" md="6">
					<Input
						type="password"
						id="new-password"
						name="new-password"
						placeholder="Enter New Password"
					/>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Col xs="12" md={{ size: 3 }}>
					<Label htmlFor="confirm-new-password">Confirm New Password:</Label>
				</Col>
				<Col xs="12" md="6">
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
			<Col sm="12" md={{ size: 8 }} className="text-right">
				<Button type="submit" color="primary">
					Submit
					</Button>
			</Col>
		</Row>
	</TabPane>
);

export default ChangePasswordPane;
