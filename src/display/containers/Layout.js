import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import ReduxToastr from 'react-redux-toastr';

import { fetchUser, fetchNews } from '../../infrastructure/actions';

import HeaderContainer from '../shared/header/HeaderContainer';
import Sidebar from '../shared/sidebar/Sidebar';
import Breadcrumb from '../shared/breadcrumb/Breadcrumb';
import AsideContainer from '../shared/aside/AsideContainer';
import Footer from '../shared/footer/Footer';
import ModalContainer from '../shared/modals/ModalContainer';
import LoadingIndicator from '../shared/LoadingIndicator';

import Dashboard from '../views/dashboard/Dashboard';
import MyTurnThreads from '../views/threads/MyTurnThreads';
import TheirTurnThreads from '../views/threads/TheirTurnThreads';
import ArchivedThreads from '../views/threads/ArchivedThreads';
import QueuedThreads from '../views/threads/QueuedThreads';
import ManageCharacters from '../views/characters/ManageCharacters';
import Tools from '../views/tools/Tools';
import Settings from '../views/settings/Settings';
import Help from '../views/help/Help';

const propTypes = {
	dispatch: PropTypes.func.isRequired,
	user: PropTypes.shape({
		id: PropTypes.string.isRequired
	}).isRequired,
	news: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};
function mapStateToProps(state) {
	const {
		user,
		news
	} = state;
	return {
		user,
		news
	};
}
class Layout extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		if (!this.props.user || !this.props.user.id) {
			dispatch(fetchUser());
		}
		if (!this.props.news || !this.props.news.length) {
			dispatch(fetchNews());
		}
	}
	render() {
		if (!this.props.user || !this.props.user.id) {
			return (
				<div>
					<LoadingIndicator
						style={{
							width: 50,
							height: 50,
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)'
						}}
					/>
				</div>
			);
		}
		return (
			<div className="app">
				<HeaderContainer />
				<div className="app-body">
					<Sidebar {...this.props} />
					<main className="main">
						<Breadcrumb />
						<Container fluid>
							<Switch>
								<Route path="/dashboard" name="Dashboard" component={Dashboard} />
								<Route path="/threads/your-turn" name="Threads" component={MyTurnThreads} />
								<Route path="/threads/their-turn" name="Threads" component={TheirTurnThreads} />
								<Route path="/threads/archived" name="Threads" component={ArchivedThreads} />
								<Route path="/threads/queued" name="Threads" component={QueuedThreads} />
								<Route path="/tools" name="Tools" component={Tools} />
								<Route path="/settings" name="Settings" component={Settings} />
								<Route path="/manage-characters" name="Characters" component={ManageCharacters} />
								<Route path="/help" name="Help" component={Help} />
								<Redirect from="/" to="/dashboard" />
							</Switch>
						</Container>
					</main>
					<AsideContainer />
				</div>
				<Footer />
				<ModalContainer />
				<ReduxToastr />
			</div>
		);
	}
}

Layout.propTypes = propTypes;

export default connect(mapStateToProps)(Layout);
