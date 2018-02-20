import React from 'react';
import {
	TabPane
} from 'reactstrap';

const SupportTopicsCard = () => (
	<TabPane tabId="support">
		<p>
			Intro Tutorial: How to Use RPThreadTracker ~{' '}
			<a href="/">Video <i className="fas fa-external-link-alt" /></a>
		</p>
		<p>
			How to Manage Queued Tumblr Posts ~{' '}
			<a href="/">Video <i className="fas fa-external-link-alt" /></a>
		</p>
	</TabPane>
);

export default SupportTopicsCard;
