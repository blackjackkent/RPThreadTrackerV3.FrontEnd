// #region imports
import React from 'react';
import PropTypes from 'prop-types';
import { NavItem, NavLink, Badge } from 'reactstrap';
// #endregion imports

const propTypes = {
	asideToggle: PropTypes.func.isRequired,
	newsUnreadCount: PropTypes.number.isRequired,
	isNewsAsideOpen: PropTypes.bool.isRequired
};

const HeaderAsideToggle = (props) => {
	const {
		asideToggle,
		newsUnreadCount,
		isNewsAsideOpen
	} = props;

	return (
		<NavItem>
			<NavLink href="#" onClick={() => asideToggle(!isNewsAsideOpen)}>
				<i className="icon-bell" />
				{newsUnreadCount > 0 && <Badge pill color="danger">{newsUnreadCount}</Badge>}
			</NavLink>
		</NavItem>
	);
};
HeaderAsideToggle.propTypes = propTypes;
export default HeaderAsideToggle;
