import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from '../../components/shared/Header';
import Sidebar from '../../components/shared/sidebar/Sidebar';
import Breadcrumb from '../../components/shared/Breadcrumb';
import Aside from '../../components/shared/Aside';
import Footer from '../../components/shared/Footer';

import Dashboard from '../../views/Dashboard/';
import Threads from '../../views/Threads/';

class Full extends Component {
	render() {
		return (
			<div className="app">
				<Header />
				<div className="app-body">
					<Sidebar {...this.props} />
					<main className="main">
						<Breadcrumb />
						<Container fluid>
							<Switch>
								<Route path="/dashboard" name="Dashboard" component={Dashboard} />
								<Route path="/threads" name="Threads" component={Threads} />
								<Redirect from="/" to="/dashboard" />
							</Switch>
						</Container>
					</main>
					<Aside />
				</div>
				<Footer />
			</div>
		);
	}
}

export default Full;
