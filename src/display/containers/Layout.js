// #region imports
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import ReduxToastr from 'react-redux-toastr';

import * as actions from '../../infrastructure/actions';
import * as selectors from '../../infrastructure/selectors';

import HeaderContainer from '../shared/header/HeaderContainer';
import Sidebar from '../shared/sidebar/Sidebar';
import BreadcrumbWrapper from '../shared/breadcrumb/BreadcrumbWrapper';
import AsideContainer from '../shared/aside/AsideContainer';
import ModalContainer from '../shared/modals/ModalContainer';
import LoadingIndicator from '../shared/loading/LoadingIndicator';
import Footer from '../shared/footer/Footer';

import Dashboard from '../views/dashboard/Dashboard';
import Threads from '../views/threads/Threads';
import AllThreads from '../views/threads/AllThreads';
import MyTurnThreads from '../views/threads/MyTurnThreads';
import TheirTurnThreads from '../views/threads/TheirTurnThreads';
import ArchivedThreads from '../views/threads/ArchivedThreads';
import QueuedThreads from '../views/threads/QueuedThreads';
import ManageCharacters from '../views/characters/ManageCharacters';
import Tools from '../views/tools/Tools';
import Settings from '../views/settings/Settings';
import Help from '../views/help/Help';
import withPageViewTracker from '../../infrastructure/withPageViewTracker';
// #endregion imports

const propTypes = {
	fetchUser: PropTypes.func.isRequired,
	fetchNews: PropTypes.func.isRequired,
	fetchUserSettings: PropTypes.func.isRequired,
	isLoadingIconVisible: PropTypes.bool.isRequired,
	user: PropTypes.shape({
		id: PropTypes.string.isRequired
	}).isRequired,
	news: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	userSettings: PropTypes.shape({
		settingsId: PropTypes.number
	}).isRequired
};
const mapStateToProps = (state) => {
	const { user, news, userSettings } = state;
	const isLoadingIconVisible = selectors.getIsLoadingIconVisible(state);
	return {
		user,
		news,
		userSettings,
		isLoadingIconVisible
	};
};
class Layout extends Component {
	constructor() {
		super();
		this.isUserLoaded = this.isUserLoaded.bind(this);
		this.isNewsLoaded = this.isNewsLoaded.bind(this);
	}

	componentDidMount() {
		const { fetchUser, fetchNews, fetchUserSettings } = this.props;
		if (!this.isUserLoaded()) {
			fetchUser();
		}
		if (!this.isNewsLoaded()) {
			fetchNews();
		}
		if (!this.areUserSettingsLoaded()) {
			fetchUserSettings();
		}
	}

	isUserLoaded() {
		const { user } = this.props;
		return user && user.id;
	}

	isNewsLoaded() {
		const { news } = this.props;
		return news && news.length;
	}

	areUserSettingsLoaded() {
		const { userSettings } = this.props;
		return userSettings && userSettings.settingsId;
	}

	showLoadingIndicator() {
		return (
			<LoadingIndicator
				data-spec="layout-loader"
				style={{
					width: 50,
					height: 50,
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)'
				}}
			/>
		);
	}

	showLayout() {
		const { isLoadingIconVisible } = this.props;
		return (
			<div className="app" data-spec="layout-app">
				<ReduxToastr />
				<HeaderContainer />
				<div className="app-body">
					<Sidebar {...this.props} />
					<main className="main">
						<BreadcrumbWrapper isLoadingIconVisible={isLoadingIconVisible} />
						<Container fluid>
							<Switch>
								<Route path="/dashboard" name="Dashboard" component={Dashboard} />
								<Route path="threads/*" name="Threads" component={Threads} />
								<Route
									path="/threads/all"
									name="Threads"
									render={
										/* istanbul ignore next */
										() => <Threads Renderable={AllThreads} />
									}
								/>
								<Route
									path="/threads/your-turn"
									name="Threads"
									render={
										/* istanbul ignore next */
										() => <Threads Renderable={MyTurnThreads} />
									}
								/>
								<Route
									path="/threads/their-turn"
									name="Threads"
									render={
										/* istanbul ignore next */
										() => <Threads Renderable={TheirTurnThreads} />
									}
								/>
								<Route
									path="/threads/archived"
									name="Threads"
									render={
										/* istanbul ignore next */
										() => <Threads Renderable={ArchivedThreads} />
									}
								/>
								<Route
									path="/threads/queued"
									name="Threads"
									render={
										/* istanbul ignore next */
										() => <Threads Renderable={QueuedThreads} />
									}
								/>
								<Route
									path="/manage-characters"
									name="Characters"
									component={ManageCharacters}
								/>

								<Route path="/tools/:tabId" name="Tools" component={Tools} />
								<Redirect from="/tools" to="/tools/export" />

								<Route
									path="/settings/:tabId"
									name="Settings"
									component={Settings}
								/>
								<Redirect from="/settings" to="/settings/change-password" />

								<Route path="/help/:tabId" name="Help" component={Help} />
								<Redirect from="/help" to="/help/about" />

								<Redirect from="/" to="/dashboard" />
							</Switch>
						</Container>
					</main>
					<AsideContainer />
				</div>
				<Footer />
				<ModalContainer />
			</div>
		);
	}

	render() {
		if (!this.isUserLoaded()) {
			return this.showLoadingIndicator();
		}
		return this.showLayout();
	}
}

Layout.propTypes = propTypes;
export default connect(mapStateToProps, {
	fetchUser: actions.fetchUser,
	fetchNews: actions.fetchNews,
	fetchUserSettings: actions.fetchUserSettings
})(withPageViewTracker(Layout));
