import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import ChangePasswordPane from './components/ChangePasswordPane';
import UpdateAccountInfoPane from './components/UpdateAccountInfoPane';
import DeleteAccountPane from './components/DeleteAccountPane';
import TabContent from '../../shared/styled/TabContent';
import StaticTabNav from '../../shared/static/StaticTabNav';
import StaticDropdownNav from '../../shared/static/StaticDropdownNav';
import tabs from '../../../infrastructure/constants/tabs';

const propTypes = {
	match: PropTypes.shape({
		url: PropTypes.string,
		params: PropTypes.shape({
			tabId: PropTypes.string
		})
	}).isRequired
};

const Settings = (props) => {
	const { match } = props;
	const options = Object.values(tabs.SETTINGS);
	return (
		<div className="animated fadeIn static-container settings-container">
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
						<ChangePasswordPane />
						<UpdateAccountInfoPane />
						<DeleteAccountPane />
					</TabContent>
				</Col>
			</Row>
		</div>
	);
};

Settings.propTypes = propTypes;
export default Settings;
