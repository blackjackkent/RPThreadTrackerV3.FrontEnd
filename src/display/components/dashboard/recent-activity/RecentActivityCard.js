import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBlock } from 'reactstrap';
import RecentActivityRow from './RecentActivityRow';

const propTypes = {
	threads: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

const RecentActivityCard = (props) => {
	const { threads } = props;
	return (
		<Card className="recent-activity-card">
			<CardHeader>
				<i className="fa fa-align-justify" /> Recent Activity
			</CardHeader>
			<CardBlock className="card-body">
				{threads.map(thread => <RecentActivityRow thread={thread} key={thread.id} />)}
			</CardBlock>
		</Card>
	);
};
RecentActivityCard.propTypes = propTypes;
export default RecentActivityCard;
