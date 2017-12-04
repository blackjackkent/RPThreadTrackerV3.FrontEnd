import React from 'react';
import PropTypes from 'prop-types';
import {
	NavItem, NavLink
} from 'reactstrap';

const propTypes = {
	tabId: PropTypes.string.isRequired,
	activeTab: PropTypes.string.isRequired,
	setActiveTab: PropTypes.func.isRequired,
	iconId: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
};

const TabNavItemLink = (props) => {
	const {
		tabId,
		activeTab,
		setActiveTab,
		iconId,
		title
	} = props;
	return (
		<NavItem>
			<NavLink
				href={`#${tabId}`}
				className={activeTab === tabId ? 'active' : ''}
				onClick={() => { setActiveTab(tabId); }}
			>
				<i className={iconId ? `fa fa-${iconId}` : ''} /> {title}
			</NavLink>
		</NavItem>
	);
};
TabNavItemLink.propTypes = propTypes;

export default TabNavItemLink;
