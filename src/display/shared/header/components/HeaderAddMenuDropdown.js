// #region imports
import React from 'react';
import PropTypes from 'prop-types';
import { NavItem, Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import HeaderDropdownItem from './HeaderDropdownItem';
// #endregion imports

const propTypes = {
	headerAddMenuDropdownToggle: PropTypes.func.isRequired,
	isHeaderAddMenuDropdownOpen: PropTypes.bool.isRequired,
	openUpsertCharacterModal: PropTypes.func.isRequired,
	openNewThreadModal: PropTypes.func.isRequired
};

const HeaderAddMenuDropdown = (props) => {
	const {
		headerAddMenuDropdownToggle,
		isHeaderAddMenuDropdownOpen,
		openUpsertCharacterModal,
		openNewThreadModal
	} = props;

	return (
		<NavItem>
			<Dropdown
				isOpen={isHeaderAddMenuDropdownOpen}
				data-spec="header-dropdown"
				toggle={headerAddMenuDropdownToggle}
			>
				<DropdownToggle className="nav-link dropdown-toggle">
					<i className="fas fa-plus-circle" />
				</DropdownToggle>
				<DropdownMenu data-spec="header-dropdown-menu" right className={isHeaderAddMenuDropdownOpen ? 'show' : ''}>
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
				</DropdownMenu>
			</Dropdown>
		</NavItem>
	);
};
HeaderAddMenuDropdown.propTypes = propTypes;
export default HeaderAddMenuDropdown;
