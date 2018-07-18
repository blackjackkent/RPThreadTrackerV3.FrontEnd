import React from 'react';
import {
	Row, Col, TabContent
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChangePasswordPane from './components/ChangePasswordPane';
import UpdateAccountInfoPane from './components/UpdateAccountInfoPane';
import { setActiveSettingsTab, submitUserChangePassword, submitUserAccountInfo } from '../../../infrastructure/actions';
import StaticTabNav from '../../shared/static/StaticTabNav';
import StaticDropdownNav from '../../shared/static/StaticDropdownNav';
import tabs from '../../../infrastructure/constants/tabs';

const propTypes = {
	activeTab: PropTypes.string.isRequired,
	user: PropTypes.shape({}).isRequired,
	setActiveSettingsTab: PropTypes.func.isRequired,
	submitUserChangePassword: PropTypes.func.isRequired,
	submitUserAccountInfo: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	const {
		ui,
		user
	} = state;
	return {
		user,
		activeTab: ui.activeSettingsTab
	};
}

const Settings = (props) => {
	const { activeTab, user } = props;
	const options = Object.values(tabs.SETTINGS);
	return (
		<div className="animated fadeIn static-container settings-container">
			<Row>
				<Col className="d-lg-none text-center">
					<StaticDropdownNav
						data-spec="settings-static-dropdown-nav"
						setActiveTab={props.setActiveSettingsTab}
						activeTab={activeTab}
						options={options}
					/>
				</Col>
			</Row>
			<Row>
				<Col className="d-none d-lg-block" md={3}>
					<StaticTabNav
						data-spec="settings-static-tab-nav"
						setActiveTab={props.setActiveSettingsTab}
						activeTab={activeTab}
						options={options}
					/>
				</Col>
				<Col xs="12" lg="9">
					<TabContent activeTab={activeTab}>
						<ChangePasswordPane submitChangePasswordForm={props.submitUserChangePassword} />
						<UpdateAccountInfoPane
							submitAccountInfoForm={props.submitUserAccountInfo}
							user={user}
						/>
					</TabContent>
				</Col>
			</Row>
		</div>
	);
};

Settings.propTypes = propTypes;
export default connect(mapStateToProps, {
	submitUserChangePassword,
	setActiveSettingsTab,
	submitUserAccountInfo
})(Settings);
