import React from 'react';
import {
	Row, Col, TabPane, Form, FormGroup, Input, Label, Button
} from 'reactstrap';

const ContactFormPane = () => (
	<TabPane tabId="contact">
		<Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
			<p>Have a suggestion about the site? Encountered a bug? Want to just say hi or give me a hug? Please feel free to send me a message, or visit the tracker <a target="_blank" rel="noopener noreferrer" href="http://tblrthreadtracker.tumblr.com">support blog</a>.</p>
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
		<Row>
			<Col className="text-right">
				<Button type="submit" color="primary">
					Submit
				</Button>
			</Col>
		</Row>
	</TabPane>
);

export default ContactFormPane;
