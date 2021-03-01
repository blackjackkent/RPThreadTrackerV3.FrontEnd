// #region imports
import React from 'react';
import PropTypes from 'prop-types';
import { NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { navigation } from '../../../../utility/history';
import HeaderDropdownItem from './HeaderDropdownItem';
// #endregion imports

const propTypes = {
	headerProfileDropdownToggle: PropTypes.func.isRequired,
	isHeaderProfileDropdownOpen: PropTypes.bool.isRequired,
	user: PropTypes.shape({
		id: PropTypes.string,
		userName: PropTypes.string
	}).isRequired
};

const HeaderProfileDropdown = (props) => {
	const { headerProfileDropdownToggle, isHeaderProfileDropdownOpen, user } = props;
	const history = useHistory();
	const logout = () => {
		history.push('/logout');
	};

	return (
		<NavItem>
			<Dropdown
				isOpen={isHeaderProfileDropdownOpen}
				data-spec="header-dropdown"
				toggle={headerProfileDropdownToggle}
			>
				<DropdownToggle className="nav-link dropdown-toggle">
					<i className="fas fa-user" />
				</DropdownToggle>
				<DropdownMenu
					data-spec="header-dropdown-menu"
					right
					className={isHeaderProfileDropdownOpen ? 'show' : ''}
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
						onClick={() => navigation.navigateTo('/settings')}
						label="Account Settings"
					/>
					<HeaderDropdownItem
						data-spec="header-dropdown-tools-link"
						onClick={() => navigation.navigateTo('/tools')}
						label="Tracker Tools"
					/>
					<HeaderDropdownItem
						data-spec="header-dropdown-help-link"
						onClick={() => navigation.navigateTo('/help')}
						label="Help"
					/>
					<HeaderDropdownItem
						data-spec="header-dropdown-logout-link"
						onClick={logout}
						label="Logout"
					/>
				</DropdownMenu>
			</Dropdown>
		</NavItem>
	);
};
HeaderProfileDropdown.propTypes = propTypes;
export default HeaderProfileDropdown;
