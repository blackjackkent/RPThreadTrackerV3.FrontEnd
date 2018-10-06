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
					<a href="https://youtu.be/Jcbv3aNQVDg">Video <i className="fas fa-external-link-alt" /></a>
				</p>
			</CardBlock>
		</Card>
	</TabPane>
);

export default SupportGuidesPane;
