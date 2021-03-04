// #region imports
import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'reactstrap';
import {
	HeaderLogoBlock,
	HeaderAsideToggle,
	HeaderProfileDropdown,
	HeaderAddMenuDropdown
} from './components';
import Style from './_styles';
// #endregion imports

const propTypes = {
	asideToggle: PropTypes.func.isRequired,
	headerProfileDropdownToggle: PropTypes.func.isRequired,
	headerAddMenuDropdownToggle: PropTypes.func.isRequired,
	logout: PropTypes.func.isRequired,
	mobileSidebarToggle: PropTypes.func.isRequired,
	newsUnreadCount: PropTypes.number.isRequired,
	openUpsertCharacterModal: PropTypes.func.isRequired,
	openNewThreadModal: PropTypes.func.isRequired,
	sidebarToggle: PropTypes.func.isRequired,
	isHeaderProfileDropdownOpen: PropTypes.bool.isRequired,
	isHeaderAddMenuDropdownOpen: PropTypes.bool.isRequired,
	user: PropTypes.shape({
		id: PropTypes.string
	}).isRequired
};

const Header = (props) => {
	const {
		asideToggle,
		headerProfileDropdownToggle,
		headerAddMenuDropdownToggle,
		logout,
		mobileSidebarToggle,
		newsUnreadCount,
		openUpsertCharacterModal,
		openNewThreadModal,
		sidebarToggle,
		isHeaderProfileDropdownOpen,
		isHeaderAddMenuDropdownOpen,
		user
	} = props;

	return (
		<Style className="app-header navbar">
			<HeaderLogoBlock
				mobileSidebarToggle={mobileSidebarToggle}
				sidebarToggle={sidebarToggle}
			/>
			<Nav className="ml-auto" navbar>
				<HeaderAsideToggle asideToggle={asideToggle} newsUnreadCount={newsUnreadCount} />
				<HeaderAddMenuDropdown
					isHeaderAddMenuDropdownOpen={isHeaderAddMenuDropdownOpen}
					headerAddMenuDropdownToggle={headerAddMenuDropdownToggle}
					logout={logout}
					openUpsertCharacterModal={openUpsertCharacterModal}
					openNewThreadModal={openNewThreadModal}
					user={user}
				/>
				<HeaderProfileDropdown
					isHeaderProfileDropdownOpen={isHeaderProfileDropdownOpen}
					headerProfileDropdownToggle={headerProfileDropdownToggle}
					user={user}
				/>
			</Nav>
		</Style>
	);
};

Header.propTypes = propTypes;

export default Header;
