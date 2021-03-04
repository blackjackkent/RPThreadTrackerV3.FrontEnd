// #region imports
import React from 'react';
import PropTypes from 'prop-types';
import { NavItem, NavLink, Badge } from 'reactstrap';
// #endregion imports

const propTypes = {
	toggleNewsAside: PropTypes.func.isRequired,
	unreadNewsCount: PropTypes.number.isRequired
};

const HeaderAsideToggle = (props) => {
	const { toggleNewsAside, unreadNewsCount } = props;

	return (
		<NavItem>
			<NavLink data-spec="header-aside-toggle-link" href="#" onClick={toggleNewsAside}>
				<i className="fas fa-bell" />
				{unreadNewsCount > 0 && (
					<Badge data-spec="header-aside-toggle-unread-badge" pill color="danger">
						{unreadNewsCount}
					</Badge>
				)}
			</NavLink>
		</NavItem>
	);
};
HeaderAsideToggle.propTypes = propTypes;
export default HeaderAsideToggle;
