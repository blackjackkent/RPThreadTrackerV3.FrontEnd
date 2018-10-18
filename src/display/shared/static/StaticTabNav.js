import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../styled/Nav';
import StaticTabNavItem from './StaticTabNavItem';

const propTypes = {
	activeTab: PropTypes.string.isRequired,
	setActiveTab: PropTypes.func.isRequired,
	options: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};
const StaticTabNav = (props) => {
	const { activeTab, setActiveTab, options } = props;
	const optionElements = options.map(o => (
		<StaticTabNavItem
			tabId={o.tabId}
			activeTab={activeTab}
			setActiveTab={setActiveTab}
			iconId={o.icon}
			title={o.name}
			key={o.tabId}
			data-spec="static-tab-nav-option"
		/>
	));
	return (
		<Nav className="flex-column static-tab-nav" data-spec="static-tab-nav">
			{optionElements}
		</Nav>
	);
};
StaticTabNav.propTypes = propTypes;

export default StaticTabNav;
