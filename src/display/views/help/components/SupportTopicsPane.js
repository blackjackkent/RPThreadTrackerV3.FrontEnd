import React from 'react';
import {
	TabPane
} from 'reactstrap';

const SupportTopicsCard = () => (
	<TabPane tabId="support">
		<p>
			Intro Tutorial: How to Use RPThreadTracker ~{' '}
			<a href="/">Video <i className="fa fa-external-link" /></a>
		</p>
		<p>
			How to Manage Queued Tumblr Posts ~{' '}
			<a href="/">Video <i className="fa fa-external-link" /></a>
		</p>
	</TabPane>
);

export default SupportTopicsCard;
