import React from 'react';
import PropTypes from 'prop-types';
import CleanSelect from '../styled/CleanSelect';
import { navigation } from '../../../utility/history';

const propTypes = {
	activeTab: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};
class StaticDropdownNav extends React.Component {
	constructor() {
		super();
		this.setActiveTab = this.setActiveTab.bind(this);
	}

	setActiveTab(href) {
		navigation.navigateTo(href);
	}

	render() {
		const { activeTab, options } = this.props;
		const optionElements = options.map((o) => (
			<option value={o.href} key={o.href} data-spec="static-dropdown-nav-option">
				{o.name}
			</option>
		));
		return (
			<CleanSelect>
				<select
					className="clean-select"
					onChange={(e) => this.setActiveTab(e.target.value)}
					value={activeTab}
					data-spec="static-dropdown-nav-select"
				>
					{optionElements}
				</select>
			</CleanSelect>
		);
	}
}
StaticDropdownNav.propTypes = propTypes;
export default StaticDropdownNav;
