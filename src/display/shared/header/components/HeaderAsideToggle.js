// #region imports
import React from 'react';
import PropTypes from 'prop-types';
import { NavItem, NavLink, Badge } from 'reactstrap';
// #endregion imports

const propTypes = {
	asideToggle: PropTypes.func.isRequired,
	newsUnreadCount: PropTypes.number.isRequired
};

const HeaderAsideToggle = (props) => {
	const {
		asideToggle,
		newsUnreadCount
	} = props;

	return (
		<NavItem>
			<NavLink
				data-spec="header-aside-toggle-link"
				href="#"
				onClick={asideToggle}
			>
				<i className="icon-bell" />
				{
					newsUnreadCount > 0 &&
					<Badge data-spec="header-aside-toggle-unread-badge" pill color="danger">
						{newsUnreadCount}
					</Badge>
				}
			</NavLink>
		</NavItem>
	);
};
HeaderAsideToggle.propTypes = propTypes;
export default HeaderAsideToggle;
