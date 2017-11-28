import React from 'react';
import { Card, CardHeader, Label, Input, CardBlock, CardFooter, Form, FormGroup, Button, Col } from 'reactstrap';

const ChangeUsernameCard = () => (
	<Card className="change-username">
		<CardHeader>
			<i className="fa fa-user" />Change Username
		</CardHeader>
		<CardBlock className="card-body">
			<Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
				<FormGroup row>
					<Col xs="12">
						<Label htmlFor="new-username">New Username:</Label>
					</Col>
					<Col xs="12">
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

export default ChangeUsernameCard;
