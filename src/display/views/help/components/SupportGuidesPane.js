import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { TabPane, CardHeader, CardBody } from 'reactstrap';
import Card from '../../../shared/styled/Card';

const SupportGuidesPane = () => (
	<TabPane tabId="guides">
		<Card>
			<CardHeader>
				<FontAwesomeIcon icon={['fas', 'play-circle']} /> Support Guides
			</CardHeader>
			<CardBody className="card-body">
				<p>
					Intro Tutorial: How to Use RPThreadTracker ~{' '}
					<a
						href="https://youtu.be/R7psA53V-9E"
						target="_blank"
						rel="noopener noreferrer"
					>
						Video <FontAwesomeIcon icon={['fas', 'external-link-alt']} />
					</a>
				</p>
				<p>
					How to Manage Public Views ~{' '}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="http://tblrthreadtracker.tumblr.com/post/178908061196/guide-to-managing-public-views-in-rpthreadtracker"
					>
						Text Guide <FontAwesomeIcon icon={['fas', 'external-link-alt']} />
					</a>
				</p>
				<p>
					How to Mark Tumblr Threads as Queued ~{' '}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="http://tblrthreadtracker.tumblr.com/post/179393749936/how-to-mark-tumblr-threads-as-queued-on"
					>
						Text Guide <FontAwesomeIcon icon={['fas', 'external-link-alt']} />
					</a>
				</p>
			</CardBody>
		</Card>
	</TabPane>
);

export default SupportGuidesPane;
