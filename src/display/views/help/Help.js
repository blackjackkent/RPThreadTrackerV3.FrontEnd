import React from 'react';
import {
	Row, Col, TabContent
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AboutTrackerPane from './components/AboutTrackerPane';
import SupportGuidesPane from './components/SupportGuidesPane';
import ContactFormPane from './components/ContactFormPane';
import { setActiveHelpTab, submitContactForm } from '../../../infrastructure/actions';
import StaticTabNav from '../../shared/static/StaticTabNav';
import StaticDropdownNav from '../../shared/static/StaticDropdownNav';
import FAQPane from './components/FAQPane';

const propTypes = {
	activeTab: PropTypes.string.isRequired,
	setActiveHelpTab: PropTypes.func.isRequired,
	submitContactForm: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	const {
		ui
	} = state;
	return {
		activeTab: ui.activeHelpTab
	};
}

const Help = (props) => {
	const { activeTab } = props;
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
						setActiveTab={props.setActiveHelpTab}
						activeTab={activeTab}
						options={options}
					/>
				</Col>
			</Row>
			<Row>
				<Col className="d-none d-lg-block" md={3}>

					<StaticTabNav
						setActiveTab={props.setActiveHelpTab}
						activeTab={activeTab}
						options={options}
					/>
				</Col>
				<Col xs="12" lg="9">
					<TabContent activeTab={activeTab}>
						<AboutTrackerPane />
						<SupportGuidesPane />
						<FAQPane />
						<ContactFormPane submitContactForm={props.submitContactForm} />
					</TabContent>
				</Col>
			</Row>
		</div>
	);
};

Help.propTypes = propTypes;
export default connect(mapStateToProps, {
	setActiveHelpTab,
	submitContactForm
})(Help);
