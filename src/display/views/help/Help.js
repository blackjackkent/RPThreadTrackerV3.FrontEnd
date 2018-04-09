import React, { Component } from 'react';
import {
	Row, Col, TabContent
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AboutTrackerPane from './components/AboutTrackerPane';
import SupportGuidesPane from './components/SupportGuidesPane';
import ContactFormPane from './components/ContactFormPane';
import { setActiveHelpTab } from '../../../infrastructure/actions';
import StaticTabNav from '../../shared/static/StaticTabNav';
import StaticDropdownNav from '../../shared/static/StaticDropdownNav';
import FAQPane from './components/FAQPane';

const propTypes = {
	activeTab: PropTypes.string.isRequired,
	dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	const {
		ui
	} = state;
	return {
		activeTab: ui.activeHelpTab
	};
}

class Help extends Component {
	constructor(props) {
		super(props);
		this.setActiveTab = this.setActiveTab.bind(this);
	}

	setActiveTab(tab) {
		const { dispatch } = this.props;
		dispatch(setActiveHelpTab(tab));
	}
	render() {
		const { activeTab } = this.props;
		const options = [
			{
				tabId: 'about',
				name: 'About RPThreadTracker',
				icon: 'info-circle'
			},
			{
				tabId: 'faq',
				name: 'FAQ',
				icon: 'question-circle'
			},
			{
				tabId: 'guides',
				name: 'Usage Guides',
				icon: 'play-circle'
			},
			{
				tabId: 'contact',
				name: 'Contact Me',
				icon: 'envelope'
			}
		];
		return (
			<div className="animated fadeIn static-container help-container">
				<Row>
					<Col className="d-lg-none text-center">
						<StaticDropdownNav
							setActiveTab={this.setActiveTab}
							activeTab={activeTab}
							options={options}
						/>
					</Col>
				</Row>
				<Row>
					<Col className="d-none d-lg-block" md={3}>

						<StaticTabNav
							setActiveTab={this.setActiveTab}
							activeTab={activeTab}
							options={options}
						/>
					</Col>
					<Col xs="12" lg="9">
						<TabContent activeTab={activeTab}>
							<AboutTrackerPane />
							<SupportGuidesPane />
							<FAQPane />
							<ContactFormPane />
						</TabContent>
					</Col>
				</Row>
			</div>
		);
	}
}

Help.propTypes = propTypes;
export default connect(mapStateToProps)(Help);
