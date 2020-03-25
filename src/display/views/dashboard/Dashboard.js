import React, { Component } from 'react';
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

class Dashboard extends Component {
	constructor(props) {
		super(props);
		// eslint-disable-next-line max-len
		this.showDashboardThreadDistributionToggle = this.showDashboardThreadDistributionToggle.bind(
			this
		);
		this.archiveThread = this.archiveThread.bind(this);
		this.markThreadQueued = this.markThreadQueued.bind(this);
	}

	componentDidMount() {
		const { activeThreads, fetchActiveThreads, characters, fetchCharacters } = this.props;
		if (!activeThreads || !activeThreads.length) {
			fetchActiveThreads();
		}
		if (!characters || !characters.length) {
			fetchCharacters();
		}
	}

	showDashboardThreadDistributionToggle() {
		const { userSettings, updateUserSettings } = this.props;
		updateUserSettings({
			...userSettings,
			showDashboardThreadDistribution: !userSettings.showDashboardThreadDistribution
		});
	}

	archiveThread(thread) {
		const { upsertThread } = this.props;
		const updatedThread = {
			...thread,
			isArchived: !thread.isArchived
		};
		upsertThread(updatedThread);
	}

	markThreadQueued(thread) {
		const { upsertThread } = this.props;
		const updatedThread = {
			...thread,
			dateMarkedQueued: new Date(Date.now())
		};
		upsertThread(updatedThread);
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
			characterThreadCounts,
			openUntrackThreadModal,
			generateRandomThread
		} = this.props;
		return (
			<Style className="animated fadeIn dashboard-container">
				<Row>
					<Col>
						<AtAGlanceCard
							data-spec="dashboard-at-a-glance-card"
							showDashboardThreadDistribution={
								userSettings.showDashboardThreadDistribution
							}
							showDashboardThreadDistributionToggle={
								this.showDashboardThreadDistributionToggle
							}
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
				</Row>
			</Style>
		);
	}
}

Dashboard.propTypes = propTypes;
export default connect(mapStateToProps, {
	fetchActiveThreads: actions.fetchActiveThreads,
	fetchCharacters: actions.fetchCharacters,
	generateRandomThread: actions.generateRandomThread,
	openUntrackThreadModal: actions.openUntrackThreadModal,
	updateUserSettings: actions.updateUserSettings,
	upsertThread: actions.upsertThread
})(Dashboard);
