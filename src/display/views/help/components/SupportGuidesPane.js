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
					<a href="https://youtu.be/R7psA53V-9E">Video <i className="fas fa-external-link-alt" /></a>
				</p>
			</CardBlock>
		</Card>
	</TabPane>
);

export default SupportGuidesPane;
