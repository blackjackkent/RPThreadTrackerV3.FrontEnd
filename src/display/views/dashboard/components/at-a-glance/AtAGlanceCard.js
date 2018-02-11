import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, Label, Input, CardBlock, CardGroup } from 'reactstrap';
import DashboardSummaryWidget from './DashboardSummaryWidget';

const propTypes = {
	showDashboardThreadDistribution: PropTypes.bool.isRequired,
	showDashboardThreadDistributionToggle: PropTypes.func.isRequired,
	myTurnThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	theirTurnThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	activeThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	queuedThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	threadsLoading: PropTypes.bool.isRequired
};

const AtAGlanceCard = (props) => {
	const {
		showDashboardThreadDistribution,
		showDashboardThreadDistributionToggle,
		myTurnThreads,
		theirTurnThreads,
		activeThreads,
		queuedThreads,
		threadsLoading
	} = props;
	return (
		<Card className="at-a-glance-card">
			<CardHeader>
				<i className="fa fa-search" /> At a Glance
				<Label className="switch switch-sm switch-text switch-info float-right mb-0">
					<Input
						type="checkbox"
						className="switch-input"
						checked={showDashboardThreadDistribution}
						onChange={showDashboardThreadDistributionToggle}
					/>
					<span className="switch-label" data-on="On" data-off="Off" />
					<span className="switch-handle" />
				</Label>
			</CardHeader>
			<CardBlock className={showDashboardThreadDistribution ? 'card-body' : 'd-none'}>
				<CardGroup>
					<DashboardSummaryWidget
						icon="icon-list"
						header={activeThreads.length}
					>
						Active Threads
					</DashboardSummaryWidget>
					<DashboardSummaryWidget
						icon="icon-pencil"
						header={myTurnThreads.length}
						threadsLoading={threadsLoading}
					>
						Your Turn
					</DashboardSummaryWidget>
					<DashboardSummaryWidget
						icon="icon-check"
						header={theirTurnThreads.length}
						threadsLoading={threadsLoading}
					>
						Their Turn
					</DashboardSummaryWidget>
					<DashboardSummaryWidget
						icon="icon-calendar"
						header={queuedThreads.length}
						threadsLoading={threadsLoading}
					>
						Queued
					</DashboardSummaryWidget>
				</CardGroup>
			</CardBlock>
		</Card>
	);
};

AtAGlanceCard.propTypes = propTypes;

export default AtAGlanceCard;
