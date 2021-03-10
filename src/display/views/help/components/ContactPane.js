import React from 'react';
import { TabPane, CardHeader, CardBody } from 'reactstrap';
import Card from '../../../shared/styled/Card';

const ContactPane = () => {
	return (
		<TabPane tabId="contact">
			<Card>
				<CardHeader>
					<i className="fas fa-envelope" /> Contact Me
				</CardHeader>
				<CardBody className="card-body">
					<p>
						Have a suggestion about the site? Encountered a bug? Want to just say hi or
						give me a hug? Click the button below to open an issue on GitHub with your
						message.
					</p>
					<div className="text-center">
						<a
							className="btn btn-primary"
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/blackjackkent/RPThreadTrackerV3.FrontEnd/issues/new"
						>
							Go to Github
						</a>
					</div>
					<br />
					<p>
						You can also visit the tracker{' '}
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="http://tblrthreadtracker.tumblr.com"
						>
							support blog&nbsp;
						</a>
						to see if your question has recently been answered.
					</p>
				</CardBody>
			</Card>
		</TabPane>
	);
};

export default ContactPane;
