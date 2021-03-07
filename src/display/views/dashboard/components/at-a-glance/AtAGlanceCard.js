import React from 'react';
import PropTypes from 'prop-types';
import { CardHeader, Input, CardBody, CardGroup } from 'reactstrap';
import Card from '../../../../shared/styled/Card';
import SwitchLabel from '../../../../shared/styled/SwitchLabel';
import DashboardSummaryWidget from './DashboardSummaryWidget';

const propTypes = {
	showDashboardThreadDistribution: PropTypes.bool.isRequired,
	toggleShowDashboardThreadDistribution: PropTypes.func.isRequired,
	myTurnThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	theirTurnThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	activeThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	queuedThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	isLoadingIconVisible: PropTypes.bool.isRequired
};

const AtAGlanceCard = (props) => {
	const {
		showDashboardThreadDistribution,
		toggleShowDashboardThreadDistribution,
		myTurnThreads,
		theirTurnThreads,
		activeThreads,
		queuedThreads,
		isLoadingIconVisible
	} = props;
	return (
		<Card className="at-a-glance-card">
			<CardHeader data-spec="at-a-glance-card-header">
				<i className="fas fa-search" data-spec="at-a-glance-card-icon" /> At a Glance
				<SwitchLabel
					htmlFor="at-a-glance-switch"
					className="switch switch-sm switch-text switch-info float-right mb-0"
				>
					<Input
						data-spec="at-a-glance-card-toggle"
						type="checkbox"
						className="switch-input"
						id="at-a-glance-switch"
						checked={showDashboardThreadDistribution}
						onChange={toggleShowDashboardThreadDistribution}
					/>
					<span className="switch-label" data-on="On" data-off="Off" />
					<span className="switch-handle" />
				</SwitchLabel>
			</CardHeader>
			<CardBody
				data-spec="at-a-glance-card-body"
				className={showDashboardThreadDistribution ? 'card-body' : 'd-none'}
			>
				<CardGroup>
					<DashboardSummaryWidget
						data-spec="at-a-glance-active-widget"
						icon="icon-list"
						header={activeThreads.length}
						href="/threads/all"
					>
						Active Threads
					</DashboardSummaryWidget>
					<DashboardSummaryWidget
						data-spec="at-a-glance-my-turn-widget"
						icon="icon-pencil"
						header={myTurnThreads.length}
						isLoadingIconVisible={isLoadingIconVisible}
						href="/threads/your-turn"
					>
						Your Turn
					</DashboardSummaryWidget>
					<DashboardSummaryWidget
						data-spec="at-a-glance-their-turn-widget"
						icon="icon-check"
						header={theirTurnThreads.length}
						isLoadingIconVisible={isLoadingIconVisible}
						href="/threads/their-turn"
					>
						Their Turn
					</DashboardSummaryWidget>
					<DashboardSummaryWidget
						data-spec="at-a-glance-queued-widget"
						icon="icon-calendar"
						header={queuedThreads.length}
						isLoadingIconVisible={isLoadingIconVisible}
						href="/threads/queued"
					>
						Queued
					</DashboardSummaryWidget>
				</CardGroup>
			</CardBody>
		</Card>
	);
};

AtAGlanceCard.propTypes = propTypes;
export default AtAGlanceCard;
