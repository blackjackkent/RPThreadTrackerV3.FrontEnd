import React from 'react';
import {
	TabPane, CardHeader, CardBlock
} from 'reactstrap';
import Card from '../../../shared/styled/Card';

const SupportGuidesPane = () => (
	<TabPane tabId="guides">
		<Card>
			<CardHeader>
				<i
					className="fas fa-play-circle"
				/> Support Guides
			</CardHeader>
			<CardBlock className="card-body">
				<p>
					Intro Tutorial: How to Use RPThreadTracker ~{' '}
					<a href="https://youtu.be/R7psA53V-9E" target="_blank" rel="noopener noreferrer">Video <i className="fas fa-external-link-alt" /></a>
				</p>
				<p>
					How to Manage Public Views ~{' '}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="http://tblrthreadtracker.tumblr.com/post/178908061196/guide-to-managing-public-views-in-rpthreadtracker"
					>
						Text Guide <i className="fas fa-external-link-alt" />
					</a>
				</p>
				<p>
					How to Mark Tumblr Threads as Queued ~ {' '}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="http://tblrthreadtracker.tumblr.com/post/179393749936/how-to-mark-tumblr-threads-as-queued-on"
					>
						Text Guide <i className="fas fa-external-link-alt" />
					</a>
				</p>
			</CardBlock>
		</Card>
	</TabPane>
);

export default SupportGuidesPane;
