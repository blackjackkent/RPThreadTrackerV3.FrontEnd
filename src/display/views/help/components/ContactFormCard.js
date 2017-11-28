import React from 'react';
import {
	Row, Col, Card, CardHeader, CardBlock, CardFooter, Form, FormGroup, FormText, Input, Label, Button
} from 'reactstrap';

const AboutTrackerCard = () => (
	<Card>
		<CardHeader>
			<i className="fa fa-envelope" /> Contact Me
					</CardHeader>
		<CardBlock className="card-body">
			<Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
				<p>Have a suggestion about the site? Encountered a bug? Want to just say hi or give me a hug? Please feel free to send me a message, or visit the tracker <a href="http://tblrthreadtracker.tumblr.com">support blog</a>.</p>
				<FormGroup row>
					<Col md="3">
						<Label htmlFor="email-input">Email</Label>
					</Col>
					<Col xs="12" md="9">
						<Input
							type="email"
							id="email-input"
							name="email-input"
							placeholder="Enter Email"
						/>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Col md="3">
						<Label htmlFor="textarea-input">Message</Label>
					</Col>
					<Col xs="12" md="9">
						<Input
							type="textarea"
							name="textarea-input"
							id="textarea-input"
							rows="9"
							placeholder="Enter your message here..."
						/>
					</Col>
				</FormGroup>
			</Form>
		</CardBlock>
		<CardFooter>
			<Button type="submit" size="sm" color="primary">
				<i className="fa fa-dot-circle-o" />
				Submit
						</Button>
			<Button type="reset" size="sm" color="danger">
				<i className="fa fa-ban" />
				Reset
						</Button>
		</CardFooter>
	</Card>
);

export default AboutTrackerCard;
