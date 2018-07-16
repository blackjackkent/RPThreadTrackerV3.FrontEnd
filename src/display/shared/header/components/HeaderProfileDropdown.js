// #region imports
import React from 'react';
import PropTypes from 'prop-types';
import { NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import HeaderDropdownItem from './HeaderDropdownItem';
// #endregion imports

const propTypes = {
	headerProfileDropdownToggle: PropTypes.func.isRequired,
	isHeaderProfileDropdownOpen: PropTypes.bool.isRequired,
	logout: PropTypes.func.isRequired,
	openUpsertCharacterModal: PropTypes.func.isRequired,
	openNewThreadModal: PropTypes.func.isRequired,
	user: PropTypes.shape({
		id: PropTypes.string
	}).isRequired
};

const HeaderProfileDropdown = (props) => {
	const {
		headerProfileDropdownToggle,
		isHeaderProfileDropdownOpen,
		logout,
		openUpsertCharacterModal,
		openNewThreadModal,
		user
	} = props;

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
				<DropdownMenu data-spec="header-dropdown-menu" right className={isHeaderProfileDropdownOpen ? 'show' : ''}>
					<DropdownItem>
						<span className="text-center">
							Logged in as:<br />
							<strong>{user.userName}</strong>
						</span>
					</DropdownItem>
					<HeaderDropdownItem
						data-spec="header-dropdown-upsert-thread-link"
						onClick={() => openNewThreadModal()}
						label="Track New Thread"
					/>
					<HeaderDropdownItem
						data-spec="header-dropdown-upsert-character-link"
						onClick={() => openUpsertCharacterModal()}
						label="Add Character"
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
