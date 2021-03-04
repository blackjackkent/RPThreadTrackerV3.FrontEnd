// #region imports
import React from 'react';
import PropTypes from 'prop-types';
import { NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import HeaderDropdownItem from './HeaderDropdownItem';
// #endregion imports

const propTypes = {
	setIsHeaderProfileDropdownVisible: PropTypes.func.isRequired,
	isHeaderProfileDropdownVisible: PropTypes.bool.isRequired,
	user: PropTypes.shape({
		id: PropTypes.string,
		userName: PropTypes.string
	}).isRequired
};

const HeaderProfileDropdown = (props) => {
	const { setIsHeaderProfileDropdownVisible, isHeaderProfileDropdownVisible, user } = props;
	const history = useHistory();
	const navigate = (path) => {
		history.push(path);
		setIsHeaderProfileDropdownVisible(false);
	};

	return (
		<NavItem>
			<Dropdown
				isOpen={isHeaderProfileDropdownVisible}
				data-spec="header-dropdown"
				toggle={() => setIsHeaderProfileDropdownVisible(!isHeaderProfileDropdownVisible)}
			>
				<DropdownToggle className="nav-link dropdown-toggle">
					<i className="fas fa-user" />
				</DropdownToggle>
				<DropdownMenu
					data-spec="header-dropdown-menu"
					right
					className={isHeaderProfileDropdownVisible ? 'show' : ''}
				>
					<DropdownItem>
						<span className="text-center">
							Logged in as:
							<br />
							<strong>{user.userName}</strong>
						</span>
					</DropdownItem>
					<HeaderDropdownItem
						data-spec="header-dropdown-account-settings-link"
						onClick={() => navigate('/settings')}
						label="Account Settings"
					/>
					<HeaderDropdownItem
						data-spec="header-dropdown-tools-link"
						onClick={() => navigate('/tools')}
						label="Tracker Tools"
					/>
					<HeaderDropdownItem
						data-spec="header-dropdown-help-link"
						onClick={() => navigate('/help')}
						label="Help"
					/>
					<HeaderDropdownItem
						data-spec="header-dropdown-logout-link"
						onClick={() => navigate('/logout')}
						label="Logout"
					/>
				</DropdownMenu>
			</Dropdown>
		</NavItem>
	);
};
HeaderProfileDropdown.propTypes = propTypes;
export default HeaderProfileDropdown;
