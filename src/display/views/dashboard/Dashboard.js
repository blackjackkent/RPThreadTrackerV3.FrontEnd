import React, { Component, useContext, useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AtAGlanceCard from './components/at-a-glance/AtAGlanceCard';
import RecentActivityCard from './components/recent-activity/RecentActivityCard';
import YourCharactersCard from './components/your-characters/YourCharactersCard';
import TrackerSupportCard from './components/tracker-support/TrackerSupportCard';
import RandomThreadCard from './components/random-thread/RandomThreadCard';
import Style from './_styles';
import * as actions from '../../../infrastructure/actions';
import * as selectors from '../../../infrastructure/selectors';
import {
	useCharactersQuery,
	useThreadsQuery,
	useUserSettingsQuery
} from '~/infrastructure/hooks/queries';
import { useUpdateUserSettingsMutation } from '~/infrastructure/hooks/mutations';
import { QueryObserver, useQuery, useQueryClient } from 'react-query';
import queryKeys from '~/infrastructure/constants/queryKeys';
import filters from '~/infrastructure/constants/filters';
import { ThreadsContext, useFilteredActiveThreads } from '~/infrastructure/hooks';
import useRecentActivity from '~/infrastructure/hooks/useRecentActivity';

const Dashboard = () => {
	const [
		isDashboardThreadDistributionVisible,
		setIsDashboardThreadDistributionVisible
	] = useState(false);
	const { isActiveThreadsLoading, isActiveThreadsStatusLoading } = useContext(ThreadsContext);
	const { data: userSettings } = useUserSettingsQuery();
	const { updateUserSettings } = useUpdateUserSettingsMutation();
	const allActiveThreads = useFilteredActiveThreads(filters.ALL);
	const myTurnThreads = useFilteredActiveThreads(filters.MY_TURN);
	const theirTurnThreads = useFilteredActiveThreads(filters.THEIR_TURN, false);
	const queuedThreads = useFilteredActiveThreads(filters.QUEUED, false);
	const { data: characters } = useCharactersQuery();
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
	const archiveThread = (thread) => {};

	const markThreadQueued = (thread) => {};
	return (
		<Style className="animated fadeIn dashboard-container">
			<Row>
				<Col>
					<AtAGlanceCard
						data-spec="dashboard-at-a-glance-card"
						showDashboardThreadDistribution={isDashboardThreadDistributionVisible}
						toggleShowDashboardThreadDistribution={toggleDashboardThreadDistribution}
						myTurnThreads={myTurnThreads}
						theirTurnThreads={theirTurnThreads}
						activeThreads={allActiveThreads}
						queuedThreads={queuedThreads}
						isLoadingIconVisible={
							isActiveThreadsLoading || isActiveThreadsStatusLoading
						}
					/>
				</Col>
			</Row>
			<Row>
				<Col xs="12" md="6">
					<RecentActivityCard
						archiveThread={archiveThread}
						openUntrackThreadModal={() => {}}
						markThreadQueued={markThreadQueued}
						loadingInProgress={isActiveThreadsLoading || isActiveThreadsStatusLoading}
					/>
				</Col>
				{/* <Col xs="12" md="6">
					<YourCharactersCard
						characters={characters}
						characterThreadCounts={characterThreadCounts}
						loadingInProgress={isLoadingIconVisible}
					/>
				</Col> */}
			</Row>
			{/* <Row>
				<Col md="6" xs="12">
					<RandomThreadCard
						data-spec="dashboard-random-thread-card"
						generateRandomThread={generateRandomThread}
						randomThread={randomThread}
					/>
				</Col>
				<Col md="6" xs="12">
					<TrackerSupportCard />
				</Col>
			</Row>} */}
		</Style>
	);
};

export default Dashboard;
