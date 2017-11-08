import React, { Component } from 'react';
import {
	Row, Col, Card, CardHeader, CardBlock
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AtAGlanceCard from '../../components/dashboard/at-a-glance/AtAGlanceCard';
import RecentActivityCard from '../../components/dashboard/recent-activity/RecentActivityCard';
import YourCharactersCard from '../../components/dashboard/your-characters/YourCharactersCard';
import TrackerSupportCard from '../../components/dashboard/tracker-support/TrackerSupportCard';
import { fetchUserSettings, setHasDashboardAtAGlanceHidden, fetchThreads, fetchCharacters } from '../../../infrastructure/actions';
import { getMyTurnThreads, getTheirTurnThreads, getAllActiveThreads, getArchivedThreads, getQueuedThreads, getRecentActivity } from '../../../infrastructure/selectors';

const propTypes = {
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	threads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	userSettings: PropTypes.shape({
		id: PropTypes.string
	}).isRequired,
	dispatch: PropTypes.func.isRequired,
	myTurnThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	theirTurnThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	allActiveThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	archivedThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	queuedThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	recentActivityThreads: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

function mapStateToProps(state) {
	const {
		characters,
		userSettings,
		threads
	} = state;
	const myTurnThreads = getMyTurnThreads(state);
	const theirTurnThreads = getTheirTurnThreads(state);
	const allActiveThreads = getAllActiveThreads(state);
	const archivedThreads = getArchivedThreads(state);
	const queuedThreads = getQueuedThreads(state);
	const recentActivityThreads = getRecentActivity(state);
	return {
		characters,
		userSettings,
		threads,
		myTurnThreads,
		theirTurnThreads,
		allActiveThreads,
		archivedThreads,
		queuedThreads,
		recentActivityThreads
	};
}

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.hasDashboardAtAGlanceHiddenToggle = this.hasDashboardAtAGlanceHiddenToggle.bind(this);
	}

	componentDidMount() {
		const { dispatch } = this.props;
		if (!this.props.userSettings || !this.props.userSettings.id) {
			dispatch(fetchUserSettings());
		}
		if (!this.props.threads || !this.props.threads.length) {
			dispatch(fetchThreads());
		}
		if (!this.props.characters || !this.props.characters.length) {
			dispatch(fetchCharacters());
		}
	}

	hasDashboardAtAGlanceHiddenToggle() {
		const { dispatch, userSettings } = this.props;
		dispatch(setHasDashboardAtAGlanceHidden(!userSettings.hasDashboardAtAGlanceHidden));
	}

	render() {
		const {
			characters,
			userSettings,
			myTurnThreads,
			theirTurnThreads,
			allActiveThreads,
			archivedThreads,
			queuedThreads,
			recentActivityThreads
		} = this.props;
		return (
			<div className="animated fadeIn dashboard-container">
				<Row>
					<Col>
						<AtAGlanceCard
							hasDashboardAtAGlanceHidden={userSettings.hasDashboardAtAGlanceHidden}
							hasDashboardAtAGlanceHiddenToggle={this.hasDashboardAtAGlanceHiddenToggle}
							myTurnThreads={myTurnThreads}
							theirTurnThreads={theirTurnThreads}
							allActiveThreads={allActiveThreads}
							archivedThreads={archivedThreads}
							queuedThreads={queuedThreads}
						/>
					</Col>
				</Row>
				<Row>
					<Col xs="12" md="6">
						<RecentActivityCard threads={recentActivityThreads} />
					</Col>
					<Col xs="12" md="6">
						<YourCharactersCard characters={characters} />
					</Col>
				</Row>
				<Row>
					<Col md="6">
						<Card className="random-thread-generator-card">
							<CardHeader>
								<i className="fa fa-random" /> Random Thread Generator
							</CardHeader>
							<CardBlock className="card-body">
								<p>Pick a random thread to respond to!</p>
								<button className="btn btn-primary">Generate</button>
							</CardBlock>
						</Card>
					</Col>
					<Col md="6">
						<TrackerSupportCard />
					</Col>
				</Row>
			</div >
		);
	}
}

Dashboard.propTypes = propTypes;

export default connect(mapStateToProps)(Dashboard);
