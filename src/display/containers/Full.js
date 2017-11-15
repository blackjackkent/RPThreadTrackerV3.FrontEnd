import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';

import { fetchUser, fetchNews } from '../../infrastructure/actions';

import HeaderContainer from '../components/shared/header/HeaderContainer';
import Sidebar from '../components/shared/sidebar/Sidebar';
import Breadcrumb from '../components/shared/breadcrumb/Breadcrumb';
import AsideContainer from '../components/shared/aside/AsideContainer';
import Footer from '../components/shared/footer/Footer';

import Dashboard from '../views/Dashboard';
import Threads from '../views/Threads';
import Help from '../views/Help';

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
class Full extends Component {
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
								<Route path="/threads" name="Threads" component={Threads} />
								<Route path="/help" name="Help" component={Help} />
								<Redirect from="/" to="/dashboard" />
							</Switch>
						</Container>
					</main>
					<AsideContainer />
				</div>
				<Footer />
			</div>
		);
	}
}

Full.propTypes = propTypes;

export default connect(mapStateToProps)(Full);
