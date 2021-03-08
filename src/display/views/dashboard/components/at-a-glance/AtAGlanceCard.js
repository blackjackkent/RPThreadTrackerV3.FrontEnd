import React, { useEffect, useState } from 'react';
import { CardHeader, Input, CardBody, CardGroup } from 'reactstrap';
import Card from '../../../../shared/styled/Card';
import SwitchLabel from '../../../../shared/styled/SwitchLabel';
import DashboardSummaryWidget from './DashboardSummaryWidget';
import { useFilteredActiveThreads } from '~/infrastructure/hooks';
import filters from '~/infrastructure/constants/filters';
import { useUserSettingsQuery } from '~/infrastructure/hooks/queries';
import { useUpdateUserSettingsMutation } from '~/infrastructure/hooks/mutations';
import { useThreadsContext } from '~/infrastructure/hooks/contexts';

const AtAGlanceCard = () => {
	const [
		isDashboardThreadDistributionVisible,
		setIsDashboardThreadDistributionVisible
	] = useState(false);
	const { data: userSettings } = useUserSettingsQuery();
	const { updateUserSettings } = useUpdateUserSettingsMutation();
	useEffect(() => {
		if (userSettings) {
			setIsDashboardThreadDistributionVisible(userSettings.showDashboardThreadDistribution);
		}
	}, [userSettings]);
	const toggleDashboardThreadDistribution = () => {
		const newValue = !isDashboardThreadDistributionVisible;
		setIsDashboardThreadDistributionVisible(newValue);
		updateUserSettings({
			...userSettings,
			showDashboardThreadDistribution: newValue
		});
	};

	const activeThreads = useFilteredActiveThreads(filters.ALL);
	const myTurnThreads = useFilteredActiveThreads(filters.MY_TURN);
	const theirTurnThreads = useFilteredActiveThreads(filters.THEIR_TURN, false);
	const queuedThreads = useFilteredActiveThreads(filters.QUEUED, false);
	const { isThreadsLoading } = useThreadsContext();

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
						checked={isDashboardThreadDistributionVisible}
						onChange={toggleDashboardThreadDistribution}
					/>
					<span className="switch-label" data-on="On" data-off="Off" />
					<span className="switch-handle" />
				</SwitchLabel>
			</CardHeader>
			<CardBody
				data-spec="at-a-glance-card-body"
				className={isDashboardThreadDistributionVisible ? 'card-body' : 'd-none'}
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
						isLoadingIconVisible={isThreadsLoading}
						href="/threads/your-turn"
					>
						Your Turn
					</DashboardSummaryWidget>
					<DashboardSummaryWidget
						data-spec="at-a-glance-their-turn-widget"
						icon="icon-check"
						header={theirTurnThreads.length}
						isLoadingIconVisible={isThreadsLoading}
						href="/threads/their-turn"
					>
						Their Turn
					</DashboardSummaryWidget>
					<DashboardSummaryWidget
						data-spec="at-a-glance-queued-widget"
						icon="icon-calendar"
						header={queuedThreads.length}
						isLoadingIconVisible={isThreadsLoading}
						href="/threads/queued"
					>
						Queued
					</DashboardSummaryWidget>
				</CardGroup>
			</CardBody>
		</Card>
	);
};

export default AtAGlanceCard;
