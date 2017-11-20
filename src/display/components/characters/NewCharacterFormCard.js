import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, Label, Input, CardBlock, CardFooter, CardGroup, Form, FormGroup, FormText, Button, Col } from 'reactstrap';

const propTypes = {
};

const NewCharacterFormCard = (props) => {
	const { } = props;
	return (
		<Card className="track-new-character">
			<CardHeader>
				<i className="fa fa-user" />Track New Character
					</CardHeader>
			<CardBlock className="card-body">
				<Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
					<FormGroup row>
						<Col xs="12">
							<Label htmlFor="character-name">Character Name:</Label>
						</Col>
						<Col xs="12">
							<Input
								type="text"
								id="character-name"
								name="character-name"
								placeholder="Enter Character Name"
							/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Col xs="12">
							<Label htmlFor="character-platform">Platform:</Label>
						</Col>
						<Col xs="12">
							<Input disabled
								type="select"
								name="character-platform"
								id="character-platform"
							>
								<option value={1}>Tumblr</option>
							</Input>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Col xs="12">
							<Label htmlFor="character-url-identifier">Character URL Identifier:</Label>
						</Col>
						<Col xs="12">
							<Input
								type="password"
								id="character-url-identifier"
								name="character-url-identifier"
								placeholder="Enter URL Identifier"
							/>
							<FormText>
								For a Tumblr account, this will be the part of your URL before ".tumblr.com". For instance, if your URL is <strong>http://myawesomeblog.tumblr.com</strong>, you would enter <strong>myawesomeblog</strong> in this field.
							</FormText>
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

NewCharacterFormCard.propTypes = propTypes;

export default NewCharacterFormCard;
