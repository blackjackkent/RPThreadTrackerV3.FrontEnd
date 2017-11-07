import React, { Component } from 'react';
import {
	Row, Col, Card, CardHeader, CardBlock
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AtAGlanceCard from '../../components/dashboard/at-a-glance/AtAGlanceCard';
import RecentActivityCard from '../../components/dashboard/recent-activity/RecentActivityCard';
import YourCharactersCard from '../../components/dashboard/your-characters/YourCharactersCard';
import { fetchUser, fetchNews, fetchUserSettings, setHasDashboardAtAGlanceHidden, fetchThreads } from '../../../infrastructure/actions';
import { getMyTurnThreadsCount, getTheirTurnThreadsCount, getAllThreadsCount, getArchivedThreadsCount, getQueuedThreadsCount, getRecentActivity } from '../../../infrastructure/selectors';

const propTypes = {
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	user: PropTypes.shape({
		id: PropTypes.string
	}).isRequired,
	news: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		userTitle: PropTypes.string.isRequired,
		lastPostDate: PropTypes.string.isRequired
	})).isRequired,
	threads: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	const {
		news,
		characters,
		user,
		userSettings,
		threads
	} = state;
	const myTurnThreadsCount = getMyTurnThreadsCount(state);
	const theirTurnThreadsCount = getTheirTurnThreadsCount(state);
	const allThreadsCount = getAllThreadsCount(state);
	const archivedThreadsCount = getArchivedThreadsCount(state);
	const queuedThreadsCount = getQueuedThreadsCount(state);
	const recentActivityThreads = getRecentActivity(state);
	return {
		news,
		characters,
		user,
		userSettings,
		threads,
		myTurnThreadsCount,
		theirTurnThreadsCount,
		allThreadsCount,
		archivedThreadsCount,
		queuedThreadsCount,
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
		if (!this.props.user || !this.props.user.id) {
			dispatch(fetchUser());
		}
		if (!this.props.userSettings || !this.props.userSettings.id) {
			dispatch(fetchUserSettings());
		}
		if (!this.props.news || !this.props.news.length) {
			dispatch(fetchNews());
		}
		if (!this.props.threads || !this.props.threads.length) {
			dispatch(fetchThreads());
		}
	}

	hasDashboardAtAGlanceHiddenToggle() {
		const { dispatch, userSettings } = this.props;
		dispatch(setHasDashboardAtAGlanceHidden(!userSettings.hasDashboardAtAGlanceHidden));
	}

	render() {
		const { characters, user, userSettings, myTurnThreadsCount, theirTurnThreadsCount, allThreadsCount, archivedThreadsCount, queuedThreadsCount, recentActivityThreads } = this.props;
		return (
			<div className="animated fadeIn dashboard-container">
				<Row>
					<Col>
						<AtAGlanceCard
							hasDashboardAtAGlanceHidden={userSettings.hasDashboardAtAGlanceHidden}
							hasDashboardAtAGlanceHiddenToggle={this.hasDashboardAtAGlanceHiddenToggle}
							myTurnThreadsCount={myTurnThreadsCount}
							theirTurnThreadsCount={theirTurnThreadsCount}
							allThreadsCount={allThreadsCount}
							archivedThreadsCount={archivedThreadsCount}
							queuedThreadsCount={queuedThreadsCount}
						/>
					</Col>
				</Row>
				<Row>
					<Col xs="12" md="6">
						<RecentActivityCard threads={recentActivityThreads} />
					</Col>
					<Col xs="12" md="6">
						{/* <YourCharactersCard characters={characters.items} /> */}
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
						<Card className="patreon-card">
							<CardHeader>
								<i className="fa fa-dollar" /> Support Tracker Development
							</CardHeader>
							<CardBlock className="card-body">
								<div className="form-container">
									<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" className="ng-pristine ng-valid">
										<input type="hidden" name="cmd" value="_s-xclick" autoComplete="off" />
										{
											// eslint-disable-next-line max-len
										}<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----" autoComplete="off" />
										<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" name="submit" alt="PayPal - The safer, easier way to pay online!" />
										<img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
									</form>
								</div>
								<a href="https://www.patreon.com/bePatron?u=4797959" className="btn btn-primary">Support me on Patreon!</a>
							</CardBlock>
						</Card>
					</Col>
				</Row>
			</div >
		);
	}
}

Dashboard.propTypes = propTypes;

export default connect(mapStateToProps)(Dashboard);
