import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	activeTab: PropTypes.string.isRequired,
	setActiveTab: PropTypes.func.isRequired,
	options: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};
const StaticDropdownNav = (props) => {
	const { activeTab, setActiveTab, options } = props;
	const optionElements = options.map(o => (
		<option value={o.tabId} key={o.tabId} data-spec="static-dropdown-nav-option">{o.name}</option>
	));
	return (
		<select
			className="clean-select"
			onChange={e => setActiveTab(e.target.value)}
			value={activeTab}
			data-spec="static-dropdown-nav-select"
		>
			{optionElements}
		</select>
	);
};
StaticDropdownNav.propTypes = propTypes;
export default StaticDropdownNav;
