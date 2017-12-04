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
const HelpTabNav = (props) => {
	const { activeTab, setActiveTab } = props;
	return (
		<Nav tabs>
			<TabNavItemLink
				tabId="about"
				activeTab={activeTab}
				setActiveTab={setActiveTab}
				iconId="info-circle"
				title="About RPThreadTracker"
			/>
			<TabNavItemLink
				tabId="support"
				activeTab={activeTab}
				setActiveTab={setActiveTab}
				iconId="question-circle"
				title="Support Topics"
			/>
			<TabNavItemLink
				tabId="contact"
				activeTab={activeTab}
				setActiveTab={setActiveTab}
				iconId="envelope"
				title="Contact Me"
			/>
		</Nav>
	);
};
HelpTabNav.propTypes = propTypes;

export default HelpTabNav;
