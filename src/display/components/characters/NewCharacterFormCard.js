import React from 'react';
import { Card, CardHeader, Label, Input, CardBlock, CardFooter, Form, FormGroup, FormText, Button, Col } from 'reactstrap';

const NewCharacterFormCard = () => (
	<Card className="track-new-character-form">
		<CardHeader>
			<i className="fa fa-user" />Track New Character
		</CardHeader>
		<CardBlock className="card-body">
			<Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
				<FormGroup row>
					<Col xs="12" xl="4">
						<Label htmlFor="character-name">Character Name:</Label>
						<Input
							type="text"
							id="character-name"
							name="character-name"
							placeholder="Enter Character Name"
						/>
					</Col>
					<Col xs="12" xl="4">
						<Label htmlFor="character-platform">Platform:</Label>
						<Input
							disabled
							type="select"
							name="character-platform"
							id="character-platform"
						>
							<option value={1}>Tumblr</option>
						</Input>
					</Col>
					<Col xs="12" xl="4">
						<Label htmlFor="character-url-identifier">Character URL Identifier:</Label>
						<Input
							type="text"
							id="character-url-identifier"
							name="character-url-identifier"
							placeholder="Enter URL Identifier"
						/>
						<FormText>
							For a Tumblr account, this will be the part of your URL before
							&quot;.tumblr.com&quot;. For instance, if your URL is
							<strong>http://myawesomeblog.tumblr.com</strong>, you would enter
							<strong>myawesomeblog</strong> in this field.
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
export default NewCharacterFormCard;
