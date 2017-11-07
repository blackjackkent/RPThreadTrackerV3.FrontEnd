import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, Label, Input, CardBlock, CardGroup } from 'reactstrap';
import DashboardSummaryWidget from './DashboardSummaryWidget';

const propTypes = {
	hasDashboardAtAGlanceHidden: PropTypes.bool,
	hasDashboardAtAGlanceHiddenToggle: PropTypes.func.isRequired,
	myTurnThreadsCount: PropTypes.number,
	theirTurnThreadsCount: PropTypes.number,
	allThreadsCount: PropTypes.number,
	archivedThreadsCount: PropTypes.number,
	queuedThreadsCount: PropTypes.number
};

const AtAGlanceCard = (props) => {
	const { hasDashboardAtAGlanceHidden, hasDashboardAtAGlanceHiddenToggle, myTurnThreadsCount, theirTurnThreadsCount, allThreadsCount, archivedThreadsCount, queuedThreadsCount } = props;
	return (
		<Card className="at-a-glance-card">
			<CardHeader>
				<i className="fa fa-search" /> At a Glance
				<Label className="switch switch-sm switch-text switch-info float-right mb-0">
					<Input
						type="checkbox"
						className="switch-input"
						checked={!hasDashboardAtAGlanceHidden}
						onChange={hasDashboardAtAGlanceHiddenToggle}
					/>
					<span className="switch-label" data-on="On" data-off="Off" />
					<span className="switch-handle" />
				</Label>
			</CardHeader>
			<CardBlock className={!hasDashboardAtAGlanceHidden ? 'card-body' : 'd-none'}>
				<CardGroup>
					<DashboardSummaryWidget icon="icon-pencil" color="info" header={myTurnThreadsCount}>
						Your Turn
					</DashboardSummaryWidget>
					<DashboardSummaryWidget icon="icon-check" color="success" header={theirTurnThreadsCount}>
						Their Turn
					</DashboardSummaryWidget>
					<DashboardSummaryWidget icon="icon-list" color="warning" header={allThreadsCount}>
						All Threads
					</DashboardSummaryWidget>
					<DashboardSummaryWidget icon="icon-drawer" color="primary" header={archivedThreadsCount}>
						Archived
					</DashboardSummaryWidget>
					<DashboardSummaryWidget icon="icon-calendar" color="danger" header={queuedThreadsCount}>
						Queued
					</DashboardSummaryWidget>
				</CardGroup>
			</CardBlock>
		</Card>
	);
};

AtAGlanceCard.propTypes = propTypes;

export default AtAGlanceCard;
