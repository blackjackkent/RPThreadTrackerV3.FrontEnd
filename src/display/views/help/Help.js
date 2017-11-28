import React, { Component } from 'react';
import {
	Row, Col, Nav, NavItem, NavLink, TabContent
} from 'reactstrap';
import AboutTrackerPane from './components/AboutTrackerPane';
import SupportTopicsPane from './components/SupportTopicsPane';
import ContactFormPane from './components/ContactFormPane';

class Help extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			activeTab: 'about'
		};
	}

	toggle(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
	}
	render() {
		return (
			<div className="animated fadeIn static-container help-container">
				<Row>
					<Col>
						<Nav tabs>
							<NavItem>
								<NavLink
									href="#about"
									className={this.state.activeTab === 'about' ? 'active' : ''}
									onClick={() => { this.toggle('about'); }}
								>
									<i className="fa fa-info-circle" /> About RPThreadTracker
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									href="#support"
									className={this.state.activeTab === 'support' ? 'active' : ''}
									onClick={() => { this.toggle('support'); }}
								>
									<i className="fa fa-question-circle" /> Support Topics
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									href="#contact"
									className={this.state.activeTab === 'contact' ? 'active' : ''}
									onClick={() => { this.toggle('contact'); }}
								>
									<i className="fa fa-envelope" /> Contact Me
								</NavLink>
							</NavItem>
						</Nav>
						<TabContent activeTab={this.state.activeTab}>
							<AboutTrackerPane />
							<SupportTopicsPane />
							<ContactFormPane />
						</TabContent>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Help;
