import React from 'react';
import {
	Nav, NavItem, NavLink
} from 'reactstrap';
import TabNavItemLink from '../../../shared/tabs/TabNavItemLink';

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
}

export default SettingsTabNav;
