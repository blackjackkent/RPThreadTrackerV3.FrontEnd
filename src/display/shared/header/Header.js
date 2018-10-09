// #region imports
import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'reactstrap';
import styled from 'styled-components';
import {
	HeaderLogoBlock, HeaderAsideToggle, HeaderProfileDropdown, HeaderAddMenuDropdown
} from './components';
import colors from '../../../infrastructure/constants/colors';
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

const Style = styled.header`
	&.app-header.navbar {
		background-color: ${colors.BASE_BLUE};
		border-bottom: 1px solid ${colors.DARK_BLUE};
		.navbar-brand {
			background-color: ${colors.BASE_BLUE};
			border: none;
		}
		.navbar-toggler {
			color: ${colors.WHITE}
		}
		.navbar-nav {
			.nav-link {
				color: ${colors.WHITE}
				&:hover {
					color: ${colors.GRAY_100}
				}
			}
		}
	}
`;

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
				<HeaderAsideToggle
					asideToggle={asideToggle}
					newsUnreadCount={newsUnreadCount}
				/>
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
					logout={logout}
					user={user}
				/>
			</Nav>
		</Style>
	);
};

Header.propTypes = propTypes;

export default Header;
