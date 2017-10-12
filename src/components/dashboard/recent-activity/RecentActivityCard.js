import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBlock } from 'reactstrap';
import RecentActivityRow from './RecentActivityRow';

const propTypes = {
};

const defaultProps = {
};

class RecentActivityCard extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Card className="recent-activity-card">
				<CardHeader>
					<i className="fa fa-align-justify"></i> Recent Activity
				</CardHeader>
				<CardBlock className="card-body">
					<RecentActivityRow />
					<RecentActivityRow />
					<RecentActivityRow />
					<RecentActivityRow />
					<RecentActivityRow />
				</CardBlock>
			</Card>
		)
	}
}

RecentActivityCard.propTypes = propTypes;
RecentActivityCard.defaultProps = defaultProps;

export default RecentActivityCard;
