import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, Label, Input, CardBlock, CardFooter, CardGroup, Form, FormGroup, Button, Col } from 'reactstrap';

const propTypes = {
};

const ChangeUsernameCard = (props) => {
	const { } = props;
	return (
		<Card className="change-username">
			<CardHeader>
				<i className="fa fa-user" />Change Username
					</CardHeader>
			<CardBlock className="card-body">
				<Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
					<FormGroup row>
						<Col md="2">
							<Label htmlFor="new-username">New Username:</Label>
						</Col>
						<Col xs="12" md="10">
							<Input
								type="text"
								id="new-username"
								name="new-username"
								placeholder="Enter New Username"
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
