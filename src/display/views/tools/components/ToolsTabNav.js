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
				tabId="export-threads"
				activeTab={activeTab}
				setActiveTab={setActiveTab}
				iconId="download"
				title="Export Threads"
			/>
			<TabNavItemLink
				tabId="manage-tags"
				activeTab={activeTab}
				setActiveTab={setActiveTab}
				iconId="tags"
				title="Manage Tags"
			/>
		</Nav>
	);
};
SettingsTabNav.propTypes = propTypes;

export default SettingsTabNav;
