import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, Label, Input, CardBlock, CardGroup } from 'reactstrap';
import DashboardSummaryWidget from './DashboardSummaryWidget';

const propTypes = {
	hasDashboardAtAGlanceHidden: PropTypes.bool.isRequired,
	hasDashboardAtAGlanceHiddenToggle: PropTypes.func.isRequired
};

const AtAGlanceCard = (props) => {
	const { hasDashboardAtAGlanceHidden, hasDashboardAtAGlanceHiddenToggle } = props;
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
					<DashboardSummaryWidget icon="icon-pencil" color="info" header="35">
						Your Turn
					</DashboardSummaryWidget>
					<DashboardSummaryWidget icon="icon-check" color="success" header="15">
						Their Turn
					</DashboardSummaryWidget>
					<DashboardSummaryWidget icon="icon-list" color="warning" header="53">
						All Threads
					</DashboardSummaryWidget>
					<DashboardSummaryWidget icon="icon-drawer" color="primary" header="135">
						Archived
					</DashboardSummaryWidget>
					<DashboardSummaryWidget icon="icon-calendar" color="danger" header="3">
						Queued
					</DashboardSummaryWidget>
				</CardGroup>
			</CardBlock>
		</Card>
	);
};

AtAGlanceCard.propTypes = propTypes;

export default AtAGlanceCard;
