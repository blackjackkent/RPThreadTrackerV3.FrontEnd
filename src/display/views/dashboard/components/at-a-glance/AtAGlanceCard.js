import React, { useEffect, useState } from 'react';
import { CardHeader, Input, CardBody, CardGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../../../../shared/styled/Card';
import SwitchLabel from '../../../../shared/styled/SwitchLabel';
import DashboardSummaryWidget from './DashboardSummaryWidget';
import { useFilteredActiveThreads } from '~/infrastructure/hooks/derived-data';
import filters from '~/infrastructure/constants/filters';
import { useUserSettingsQuery } from '~/infrastructure/hooks/queries';
import { useUpdateUserSettingsMutation } from '~/infrastructure/hooks/mutations';
import { useActiveThreadsContext } from '~/infrastructure/hooks/contexts';

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

	const { filteredThreads: activeThreads } = useFilteredActiveThreads(filters.ALL);
	const { filteredThreads: myTurnThreads } = useFilteredActiveThreads(filters.MY_TURN);
	const { filteredThreads: theirTurnThreads } = useFilteredActiveThreads(filters.THEIR_TURN);
	const { filteredThreads: queuedThreads } = useFilteredActiveThreads(filters.QUEUED);
	const { isThreadsLoading } = useActiveThreadsContext();
	return (
		<Card className="at-a-glance-card">
			<CardHeader>
				<FontAwesomeIcon icon={['fas', 'search']} /> At a Glance
				<SwitchLabel
					htmlFor="at-a-glance-switch"
					className="switch switch-sm switch-text switch-info float-right mb-0"
				>
					<Input
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
			<CardBody className={isDashboardThreadDistributionVisible ? 'card-body' : 'd-none'}>
				<CardGroup>
					<DashboardSummaryWidget
						icon="icon-list"
						header={activeThreads.length}
						href="/threads/all"
					>
						Active Threads
					</DashboardSummaryWidget>
					<DashboardSummaryWidget
						icon="icon-pencil"
						header={myTurnThreads.length}
						isLoadingIconVisible={isThreadsLoading}
						href="/threads/your-turn"
					>
						Your Turn
					</DashboardSummaryWidget>
					<DashboardSummaryWidget
						icon="icon-check"
						header={theirTurnThreads.length}
						isLoadingIconVisible={isThreadsLoading}
						href="/threads/their-turn"
					>
						Their Turn
					</DashboardSummaryWidget>
					<DashboardSummaryWidget
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
