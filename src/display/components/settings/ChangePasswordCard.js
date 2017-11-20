import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, Label, Input, CardBlock, CardFooter, CardGroup, Form, FormGroup, Button, Col } from 'reactstrap';

const propTypes = {
};

const ChangeUsernameCard = (props) => {
	const { } = props;
	return (
		<Card className="change-password">
			<CardHeader>
				<i className="fa fa-user" />Change Password
					</CardHeader>
			<CardBlock className="card-body">
				<Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
					<FormGroup row>
						<Col md="3">
							<Label htmlFor="current-password">Current Password:</Label>
						</Col>
						<Col xs="12" md="9">
							<Input
								type="password"
								id="current-password"
								name="current-password"
								placeholder="Enter Current Password"
							/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Col md="3">
							<Label htmlFor="new-password">New Password:</Label>
						</Col>
						<Col xs="12" md="9">
							<Input
								type="password"
								id="new-password"
								name="new-password"
								placeholder="Enter New Password"
							/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Col md="3">
							<Label htmlFor="confirm-new-password">Confirm New Password:</Label>
						</Col>
						<Col xs="12" md="9">
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
};

ChangeUsernameCard.propTypes = propTypes;

export default ChangeUsernameCard;
