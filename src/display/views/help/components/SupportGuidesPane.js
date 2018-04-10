import React from 'react';
import {
	TabPane, Card, CardHeader, CardBlock
} from 'reactstrap';

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
					<a href="/">Video <i className="fas fa-external-link-alt" /></a>
				</p>
				<p>
					How to Manage Queued Tumblr Posts ~{' '}
					<a href="/">Video <i className="fas fa-external-link-alt" /></a>
				</p>
				<p>
					How to Use the RPThreadTracker QuickAdd Extension ~{' '}
					<a href="/">Video <i className="fas fa-external-link-alt" /></a>
				</p>
			</CardBlock>
		</Card>
	</TabPane>
);

export default SupportGuidesPane;
