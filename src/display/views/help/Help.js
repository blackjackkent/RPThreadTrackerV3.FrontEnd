import React from 'react';
import {
	Row, Col
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AboutTrackerPane from './components/AboutTrackerPane';
import SupportGuidesPane from './components/SupportGuidesPane';
import ContactFormPane from './components/ContactFormPane';
import * as actions from '../../../infrastructure/actions';
import tabs from '../../../infrastructure/constants/tabs';
import TabContent from '../../shared/styled/TabContent';
import StaticTabNav from '../../shared/static/StaticTabNav';
import StaticDropdownNav from '../../shared/static/StaticDropdownNav';
import FAQPane from './components/FAQPane';

const propTypes = {
	activeTab: PropTypes.string.isRequired,
	setActiveHelpTab: PropTypes.func.isRequired,
	submitContactForm: PropTypes.func.isRequired,
	match: PropTypes.shape({}).isRequired
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
	const { activeTab, setActiveHelpTab, submitContactForm, match } = props;
	const options = Object.values(tabs.HELP);
	return (
		<div className="animated fadeIn static-container help-container">
			<Row>
				<Col className="d-lg-none text-center">
					<StaticDropdownNav
						data-spec="help-static-dropdown-nav"
						setActiveTab={setActiveHelpTab}
						activeTab={activeTab}
						options={options}
					/>
				</Col>
			</Row>
			<Row>
				<Col className="d-none d-lg-block" md={3}>

					<StaticTabNav
						data-spec="help-static-tab-nav"
						options={options}
					/>
				</Col>
				<Col xs="12" lg="9">
					<TabContent activeTab={match.params.tabId}>
						<AboutTrackerPane />
						<SupportGuidesPane />
						<FAQPane />
						<ContactFormPane submitContactForm={submitContactForm} />
					</TabContent>
				</Col>
			</Row>
		</div>
	);
};

Help.propTypes = propTypes;
export default connect(mapStateToProps, {
	setActiveHelpTab: actions.setActiveHelpTab,
	submitContactForm: actions.submitContactForm
})(Help);
