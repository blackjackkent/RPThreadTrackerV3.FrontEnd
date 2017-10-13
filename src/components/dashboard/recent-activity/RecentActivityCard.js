import React from 'react';
import { Card, CardHeader, CardBlock } from 'reactstrap';
import RecentActivityRow from './RecentActivityRow';

const RecentActivityCard = () => (
	<Card className="recent-activity-card">
		<CardHeader>
			<i className="fa fa-align-justify" /> Recent Activity
		</CardHeader>
		<CardBlock className="card-body">
			<RecentActivityRow />
			<RecentActivityRow />
			<RecentActivityRow />
			<RecentActivityRow />
			<RecentActivityRow />
		</CardBlock>
	</Card>
);

export default RecentActivityCard;
