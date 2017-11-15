import React from 'react';
import {
	Row, Col, Card, CardHeader, CardBlock, CardFooter, Form, FormGroup, FormText, Input, Label, Button
} from 'reactstrap';

const Help = () => (
	<div className="animated fadeIn static-container help-container">
		<Row>
			<Col xl="3" md="6" sm="12">
				<Card className="about-tracker">
					<CardHeader>
						<i className="fa fa-info" />About RPThreadTracker
					</CardHeader>
					<CardBlock className="card-body">
						<p>
							RPThreadTracker allows users to track thread-based roleplay interactions
							and collaborative writing and stay up-to-date on which interactions they
							owe a reply on. Currently the app supports only roleplays on Tumblr,
							but will expand to support other platforms in the future.
						</p>
						<p>
							This site is in no way affiliated with Tumblr or any social media
							platform, nor does it make any direct connections to your account
							or posting permissions. It retrieves information solely through
							public application programming interfaces.
						</p>
						<p>RPThreadTracker is a product of <a href="http://www.blackjacksoftware.com">Blackjack Software</a>.</p>
					</CardBlock>
				</Card>
			</Col>
			<Col xl="3" md="6" sm="12">
				<Card className="support-topics">
					<CardHeader>
						<i className="fa fa-question" />Support Topics
					</CardHeader>
					<CardBlock className="card-body">
						<p className="support-button">
							<Button color="primary">
								Intro Tutorial: How to Use RPThreadTracker
							</Button>
						</p>
						<p className="support-button">
							<Button color="primary">
								How to Manage Queued Tumblr Posts
							</Button>
						</p>
					</CardBlock>
				</Card>
			</Col>
			<Col xl="6" md="12">
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
									<FormText className="help-block">Please enter your email</FormText>
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
			</Col>
		</Row>
	</div >
);

export default Help;
