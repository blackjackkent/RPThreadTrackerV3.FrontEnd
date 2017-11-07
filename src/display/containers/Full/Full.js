import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import HeaderContainer from '../../components/shared/header/HeaderContainer';
import Sidebar from '../../components/shared/sidebar/Sidebar';
import Breadcrumb from '../../components/shared/breadcrumb/Breadcrumb';
import AsideContainer from '../../components/shared/aside/AsideContainer';
import Footer from '../../components/shared/footer/Footer';

import Dashboard from '../../views/Dashboard/Dashboard';
import Threads from '../../views/Threads/Threads';

const Full = props => (
	<div className="app">
		<HeaderContainer />
		<div className="app-body">
			<Sidebar {...props} />
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
			<AsideContainer />
		</div>
		<Footer />
	</div>
);

export default Full;
