import React, { Component } from 'react';
import {
	Row, Col
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AtAGlanceCard from './components/at-a-glance/AtAGlanceCard';
import RecentActivityCard from './components/recent-activity/RecentActivityCard';
import YourCharactersCard from './components/your-characters/YourCharactersCard';
import TrackerSupportCard from './components/tracker-support/TrackerSupportCard';
import RandomThreadCard from './components/random-thread/RandomThreadCard';
import { generateRandomThread, updateUserSettings, fetchActiveThreads, fetchCharacters, upsertThread, openUntrackThreadModal } from '../../../infrastructure/actions';
import { getMyTurnThreads, getTheirTurnThreads, getQueuedThreads, getRecentActivity, getThreadCountsByCharacter, getIsLoadingIconVisible } from '../../../infrastructure/selectors';

const propTypes = {
	activeThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	characterThreadCounts: PropTypes.shape({}).isRequired,
	fetchActiveThreads: PropTypes.func.isRequired,
	fetchCharacters: PropTypes.func.isRequired,
	generateRandomThread: PropTypes.func.isRequired,
	isLoadingIconVisible: PropTypes.bool.isRequired,
	myTurnThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	openUntrackThreadModal: PropTypes.func.isRequired,
	queuedThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	randomThread: PropTypes.shape({}).isRequired,
	recentActivityThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	theirTurnThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	updateUserSettings: PropTypes.func.isRequired,
	upsertThread: PropTypes.func.isRequired,
	userSettings: PropTypes.shape({
		id: PropTypes.string
	}).isRequired
};

function mapStateToProps(state) {
	const {
		characters,
		userSettings,
		activeThreads,
		randomThread
	} = state;
	const myTurnThreads = getMyTurnThreads(state);
	const theirTurnThreads = getTheirTurnThreads(state);
	const queuedThreads = getQueuedThreads(state);
	const recentActivityThreads = getRecentActivity(state);
	const characterThreadCounts = getThreadCountsByCharacter(state);
	const isLoadingIconVisible = getIsLoadingIconVisible(state);
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

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.showDashboardThreadDistributionToggle =
			this.showDashboardThreadDistributionToggle.bind(this);
		this.archiveThread = this.archiveThread.bind(this);
		this.markThreadQueued = this.markThreadQueued.bind(this);
	}

	componentDidMount() {
		if (!this.props.activeThreads || !this.props.activeThreads.length) {
			this.props.fetchActiveThreads();
		}
		if (!this.props.characters || !this.props.characters.length) {
			this.props.fetchCharacters();
		}
	}

	showDashboardThreadDistributionToggle() {
		const { userSettings } = this.props;
		this.props.updateUserSettings({
			...userSettings,
			showDashboardThreadDistribution: !userSettings.showDashboardThreadDistribution
		});
	}

	archiveThread(thread) {
		const updatedThread = {
			...thread, isArchived: !thread.isArchived
		};
		this.props.upsertThread(updatedThread);
	}

	markThreadQueued(thread) {
		const updatedThread = {
			...thread, dateMarkedQueued: new Date(Date.now())
		};
		this.props.upsertThread(updatedThread);
	}

	render() {
		const {
			characters,
			userSettings,
			activeThreads,
			myTurnThreads,
			theirTurnThreads,
			queuedThreads,
			recentActivityThreads,
			randomThread,
			isLoadingIconVisible,
			characterThreadCounts
		} = this.props;
		return (
			<div className="animated fadeIn dashboard-container">
				<Row>
					<Col>
						<AtAGlanceCard
							data-spec="dashboard-at-a-glance-card"
							showDashboardThreadDistribution={userSettings.showDashboardThreadDistribution}
							showDashboardThreadDistributionToggle={this.showDashboardThreadDistributionToggle}
							myTurnThreads={myTurnThreads}
							theirTurnThreads={theirTurnThreads}
							activeThreads={activeThreads}
							queuedThreads={queuedThreads}
							isLoadingIconVisible={isLoadingIconVisible}
						/>
					</Col>
				</Row>
				<Row>
					<Col xs="12" md="6">
						<RecentActivityCard
							data-spec="dashboard-recent-activity-card"
							recentActivityThreads={recentActivityThreads}
							allThreads={activeThreads}
							characters={characters}
							archiveThread={this.archiveThread}
							openUntrackThreadModal={this.props.openUntrackThreadModal}
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
							generateRandomThread={this.props.generateRandomThread}
							randomThread={randomThread}
						/>
					</Col>
					<Col md="6" xs="12">
						<TrackerSupportCard />
					</Col>
				</Row>
			</div >
		);
	}
}

Dashboard.propTypes = propTypes;
export default connect(mapStateToProps, {
	fetchActiveThreads,
	fetchCharacters,
	generateRandomThread,
	openUntrackThreadModal,
	updateUserSettings,
	upsertThread
})(Dashboard);
