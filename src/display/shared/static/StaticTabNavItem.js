import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'reactstrap';

const propTypes = {
	href: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
};

const StaticTabNavItem = (props) => {
	const { href, title } = props;
	return (
		<NavItem>
			<NavLink to={href} activeClassName="active" data-spec="static-tab-nav-item-navlink">
				{title}
			</NavLink>
		</NavItem>
	);
};
StaticTabNavItem.propTypes = propTypes;
export default StaticTabNavItem;
