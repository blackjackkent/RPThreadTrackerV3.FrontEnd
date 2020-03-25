import React from 'react';
import { TabPane, CardHeader, CardBody, Row, Col } from 'reactstrap';
import Card from '../../../shared/styled/Card';

const BrowserExtensionsPane = () => (
	<TabPane tabId="extensions">
		<Card>
			<CardHeader>
				<i className="fas fa-flask" /> Browser Extensions
			</CardHeader>
			<CardBody className="card-body">
				<p>
					RPThreadTracker QuickAdd is a browser extension for Chrome and Firefox which
					allows you to quickly add new Tumblr threads to an RPThreadTracker account.
				</p>
				<p>
					While on any Tumblr post page, just click the extension icon to get a pop-up
					window of the tracker&apos;s &quot;Add Thread&quot; screen, with the post ID and
					blog already in place. Add your thread, close the window, and carry on!
				</p>
				<Row>
					<Col className="text-center">
						<a
							className="btn btn-primary"
							target="_blank"
							rel="noopener noreferrer"
							href="https://chrome.google.com/webstore/detail/rpthreadtracker-quickadd/paoldhmcjbgimkcicmognhfcjmcpcopl?hl=en"
						>
							Download for Chrome
						</a>
					</Col>
					<Col className="text-center">
						<a
							className="btn btn-primary"
							target="_blank"
							rel="noopener noreferrer"
							href="https://addons.mozilla.org/en-US/firefox/addon/rpthreadtracker-quickadd/"
						>
							Download for Firefox
						</a>
					</Col>
				</Row>
			</CardBody>
		</Card>
	</TabPane>
);

export default BrowserExtensionsPane;
