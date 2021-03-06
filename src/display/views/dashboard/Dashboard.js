import React, { Component, useEffect, useState } from 'react';
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
import { useQueryClient } from 'react-query';
import queryKeys from '~/infrastructure/constants/queryKeys';
import useFilteredThreads from '~/infrastructure/hooks/useFilteredThreads';
import filters from '~/infrastructure/constants/filters';

const propTypes = {};

function mapStateToProps(state) {
	const { characters, userSettings, activeThreads, randomThread } = state;
	const myTurnThreads = selectors.getMyTurnThreads(state);
	const theirTurnThreads = selectors.getTheirTurnThreads(state);
	const queuedThreads = selectors.getQueuedThreads(state);
	const recentActivityThreads = selectors.getRecentActivity(state);
	const characterThreadCounts = selectors.getThreadCountsByCharacter(state);
	const isLoadingIconVisible = selectors.getIsLoadingIconVisible(state);
	return {
		characters,
		userSettings,
		activeThreads,
		randomThread,
		myTurnThreads,
		theirTurnThreads,
		queuedThreads,
		recentActivityThreads,
		characterThreadCounts,
		isLoadingIconVisible
	};
}

const Dashboard = (props) => {
	const queryClient = useQueryClient();
	const { activeThreads } = useThreadsQuery();
	const activeThreadsStatus = queryClient.getQueryData([
		queryKeys.THREADS_STATUS,
		{ isArchived: false }
	]);
	const myTurnThreads = useFilteredThreads(
		activeThreads,
		activeThreadsStatus,
		filters.MY_TURN,
		true
	);
	console.log(myTurnThreads);
	// const toggleDashboardThreadDistribution = () => {
	// 	updateUserSettings({
	// 		...userSettings,
	// 		showDashboardThreadDistribution: !isDashboardThreadDistributionVisible
	// 	});
	// 	setIsDashboardThreadDistributionVisible(!isDashboardThreadDistributionVisible);
	// };
	// archiveThread(thread) {
	// 	const { upsertThread } = this.props;
	// 	const updatedThread = {
	// 		...thread,
	// 		isArchived: !thread.isArchived
	// 	};
	// 	upsertThread(updatedThread);
	// }

	// markThreadQueued(thread) {
	// 	const { upsertThread } = this.props;
	// 	const updatedThread = {
	// 		...thread,
	// 		dateMarkedQueued: new Date(Date.now())
	// 	};
	// 	upsertThread(updatedThread);
	// }
	return (
		<Style className="animated fadeIn dashboard-container">
			<Row>
				<Col>
					{/* <AtAGlanceCard
						data-spec="dashboard-at-a-glance-card"
						showDashboardThreadDistribution={
							userSettings.showDashboardThreadDistribution
						}
						showDashboardThreadDistributionToggle={toggleDashboardThreadDistribution}
						myTurnThreads={myTurnThreads}
						theirTurnThreads={theirTurnThreads}
						activeThreads={activeThreads}
						queuedThreads={queuedThreads}
						isLoadingIconVisible={isLoadingIconVisible}
					/> */}
				</Col>
			</Row>
			{/* <Row>
				<Col xs="12" md="6">
					<RecentActivityCard
						data-spec="dashboard-recent-activity-card"
						recentActivityThreads={recentActivityThreads}
						allThreads={activeThreads}
						characters={characters}
						archiveThread={this.archiveThread}
						openUntrackThreadModal={openUntrackThreadModal}
						markThreadQueued={this.markThreadQueued}
						loadingInProgress={isLoadingIconVisible}
					/>
				</Col>
				<Col xs="12" md="6">
					<YourCharactersCard
						characters={characters}
						characterThreadCounts={characterThreadCounts}
						loadingInProgress={isLoadingIconVisible}
					/>
				</Col>
			</Row>
			<Row>
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
			</Row> */}
		</Style>
	);
};

Dashboard.propTypes = propTypes;
export default Dashboard;
