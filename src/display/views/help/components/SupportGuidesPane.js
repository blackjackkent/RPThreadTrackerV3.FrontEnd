import React from 'react';
import {
	TabPane
} from 'reactstrap';

const SupportGuidesPane = () => (
	<TabPane tabId="guides">
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
	</TabPane>
);

export default SupportGuidesPane;
