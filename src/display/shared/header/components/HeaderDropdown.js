// #region imports
import React from 'react';
import PropTypes from 'prop-types';
import { NavItem, Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import HeaderDropdownItem from './HeaderDropdownItem';
// #endregion imports

const propTypes = {
	headerDropdownToggle: PropTypes.func.isRequired,
	isHeaderDropdownOpen: PropTypes.bool.isRequired,
	logout: PropTypes.func.isRequired,
	openUpsertCharacterModal: PropTypes.func.isRequired,
	openNewThreadModal: PropTypes.func.isRequired,
	user: PropTypes.shape({
		id: PropTypes.string
	}).isRequired
};

const HeaderDropdown = (props) => {
	const {
		headerDropdownToggle,
		isHeaderDropdownOpen,
		logout,
		openUpsertCharacterModal,
		openNewThreadModal,
		user
	} = props;

	return (
		<NavItem>
			<Dropdown
				isOpen={isHeaderDropdownOpen}
				data-spec="header-dropdown"
				toggle={() => headerDropdownToggle(!isHeaderDropdownOpen)}
			>
				<DropdownToggle className="nav-link dropdown-toggle">
					<span
						className="d-md-down-none"
						data-spec="header-dropdown-username"
					>
						{user.userName}
					</span>
				</DropdownToggle>
				<DropdownMenu right className={isHeaderDropdownOpen ? 'show' : ''}>
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
HeaderDropdown.propTypes = propTypes;
export default HeaderDropdown;
