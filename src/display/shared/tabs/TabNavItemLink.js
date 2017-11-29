import React from 'react';
import {
	Nav, NavItem, NavLink
} from 'reactstrap';

const TabNavItemLink = (props) => {
	const { tabId, activeTab, setActiveTab, iconId, title } = props;
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
}

export default TabNavItemLink;
