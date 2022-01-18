import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import TabContent from '../../shared/styled/TabContent';
import StaticTabNav from '../../shared/static/StaticTabNav';
import StaticDropdownNav from '../../shared/static/StaticDropdownNav';
import Style from './_styles';
import ManagePublicViewsPane from './components/ManagePublicViewsPane';
import BrowserExtensionsPane from './components/BrowserExtensionsPane';
import ExportThreadsPane from './components/ExportThreadsPane';
import ManageTagsPane from './components/ManageTagsPane';
import tabs from '../../../infrastructure/constants/tabs';

const propTypes = {
	match: PropTypes.shape({
		url: PropTypes.string,
		params: PropTypes.shape({
			tabId: PropTypes.string
		})
	}).isRequired
};

const Tools = ({ match }) => {
	const options = Object.values(tabs.TOOLS);
	return (
		<Style className="animated fadeIn static-container settings-container">
			<Row>
				<Col className="d-lg-none text-center">
					<StaticDropdownNav
						data-spec="tools-static-dropdown-nav"
						activeTab={match.url}
						options={options}
					/>
				</Col>
			</Row>
			<Row>
				<Col className="d-none d-lg-block" md={3}>
					<StaticTabNav data-spec="tools-static-tab-nav" options={options} />
				</Col>
				<Col xs="12" lg="9">
					<TabContent activeTab={match.params.tabId}>
						<ExportThreadsPane />
						<ManagePublicViewsPane />
						<BrowserExtensionsPane />
						<ManageTagsPane />
					</TabContent>
				</Col>
			</Row>
		</Style>
	);
};

Tools.propTypes = propTypes;
export default Tools;
