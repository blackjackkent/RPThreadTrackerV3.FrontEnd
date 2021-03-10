import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import CleanSelect from '../styled/CleanSelect';

const propTypes = {
	activeTab: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};
const StaticDropdownNav = (props) => {
	const history = useHistory();
	const { activeTab, options } = props;
	const optionElements = options.map((o) => (
		<option value={o.href} key={o.href} data-spec="static-dropdown-nav-option">
			{o.name}
		</option>
	));

	return (
		<CleanSelect>
			<select
				className="clean-select"
				onChange={(e) => history.push(e.target.value)}
				value={activeTab}
				data-spec="static-dropdown-nav-select"
			>
				{optionElements}
			</select>
		</CleanSelect>
	);
};
StaticDropdownNav.propTypes = propTypes;
export default StaticDropdownNav;
