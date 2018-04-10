import React from 'react';
import PropTypes from 'prop-types';
import { TabPane, Row, Label, Input, Form, FormGroup, Button, Col, Card, CardHeader, CardBlock } from 'reactstrap';

const propTypes = {
	user: PropTypes.shape({}).isRequired
};

const UpdateAccountInfoPane = (props) => {
	const { user } = props;
	return (
		<TabPane tabId="change-username">
			<Card>
				<CardHeader>
					<i
						className="fas fa-user"
					/> Change Username/Email
				</CardHeader>
				<CardBlock className="card-body">
					<Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
						<FormGroup row>
							<Col xs="12" lg="3">
								<Label htmlFor="username">Username:</Label>
							</Col>
							<Col xs="12" lg="9">
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
							<Col xs="12" lg="3">
								<Label htmlFor="email">Email:</Label>
							</Col>
							<Col xs="12" lg="9">
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
};
UpdateAccountInfoPane.propTypes = propTypes;
export default UpdateAccountInfoPane;
