import React from 'react';
import PropTypes from 'prop-types';
import {
	Nav
} from 'reactstrap';
import TabNavItemLink from '../../../shared/tabs/TabNavItemLink';

const propTypes = {
	activeTab: PropTypes.string.isRequired,
	setActiveTab: PropTypes.func.isRequired
};
const SettingsTabNav = (props) => {
	const { activeTab, setActiveTab } = props;
	return (
		<Nav tabs>
			<TabNavItemLink
				tabId="change-password"
				activeTab={activeTab}
				setActiveTab={setActiveTab}
				iconId="key"
				title="Change Password"
			/>
			<TabNavItemLink
				tabId="change-username"
				activeTab={activeTab}
				setActiveTab={setActiveTab}
				iconId="user"
				title="Update Account Info"
			/>
		</Nav>
	);
};
SettingsTabNav.propTypes = propTypes;

export default SettingsTabNav;
