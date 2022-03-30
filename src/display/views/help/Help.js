import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AboutTrackerPane from './components/AboutTrackerPane';
import SupportGuidesPane from './components/SupportGuidesPane';
import ContactPane from './components/ContactPane';
import tabs from '../../../infrastructure/constants/tabs';
import TabContent from '../../shared/styled/TabContent';
import StaticTabNav from '../../shared/static/StaticTabNav';
import StaticDropdownNav from '../../shared/static/StaticDropdownNav';
import FAQPane from './components/FAQPane';

const propTypes = {
	match: PropTypes.shape({
		url: PropTypes.string,
		params: PropTypes.shape({
			tabId: PropTypes.string
		})
	}).isRequired
};

const Help = (props) => {
	const { match } = props;
	const options = Object.values(tabs.HELP);
	return (
		<div className="animated fadeIn static-container help-container">
			<Row>
				<Col className="d-lg-none text-center">
					<StaticDropdownNav activeTab={match.url} options={options} />
				</Col>
			</Row>
			<Row>
				<Col className="d-none d-lg-block" md={3}>
					<StaticTabNav options={options} />
				</Col>
				<Col xs="12" lg="9">
					<TabContent activeTab={match.params.tabId}>
						<AboutTrackerPane />
						<SupportGuidesPane />
						<FAQPane />
						<ContactPane />
					</TabContent>
				</Col>
			</Row>
		</div>
	);
};

Help.propTypes = propTypes;
export default Help;
