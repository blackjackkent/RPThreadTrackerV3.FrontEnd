import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../styled/Nav';
import StaticTabNavItem from './StaticTabNavItem';

const propTypes = {
	options: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};
const StaticTabNav = (props) => {
	const { options } = props;
	const optionElements = options.map((o) => (
		<StaticTabNavItem
			href={o.href}
			title={o.name}
			key={o.href}
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
