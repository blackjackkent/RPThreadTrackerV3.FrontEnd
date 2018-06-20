// #region imports
import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'reactstrap';
import LoadingIndicator from '../LoadingIndicator';
import { HeaderLogoBlock, HeaderButton, HeaderAsideToggle, HeaderDropdown } from './components';
// #endregion imports

const propTypes = {
	asideToggle: PropTypes.func.isRequired,
	headerDropdownToggle: PropTypes.func.isRequired,
	isHeaderDropdownOpen: PropTypes.bool.isRequired,
	logout: PropTypes.func.isRequired,
	mobileSidebarToggle: PropTypes.func.isRequired,
	newsUnreadCount: PropTypes.number.isRequired,
	openUpsertCharacterModal: PropTypes.func.isRequired,
	openNewThreadModal: PropTypes.func.isRequired,
	sidebarToggle: PropTypes.func.isRequired,
	isSidebarOpen: PropTypes.bool.isRequired,
	isMobileSidebarOpen: PropTypes.bool.isRequired,
	isLoadingIconVisible: PropTypes.bool.isRequired,
	isNewsAsideOpen: PropTypes.bool.isRequired,
	user: PropTypes.shape({
		id: PropTypes.string
	}).isRequired
};

const Header = (props) => {
	const {
		asideToggle,
		headerDropdownToggle,
		isHeaderDropdownOpen,
		logout,
		mobileSidebarToggle,
		newsUnreadCount,
		openUpsertCharacterModal,
		openNewThreadModal,
		sidebarToggle,
		isLoadingIconVisible,
		isSidebarOpen,
		isMobileSidebarOpen,
		isNewsAsideOpen,
		user
	} = props;

	return (
		<header className="app-header navbar">
			<HeaderLogoBlock
				mobileSidebarToggle={mobileSidebarToggle}
				sidebarToggle={sidebarToggle}
				isSidebarOpen={isSidebarOpen}
				isMobileSidebarOpen={isMobileSidebarOpen}
			/>
			<Nav className="d-md-down-none ml-4" navbar>
				<HeaderButton onClick={() => openUpsertCharacterModal(null)} label="Add Character" />
				<HeaderButton onClick={() => openNewThreadModal(null)} label="Track New Thread" />
				{isLoadingIconVisible && <LoadingIndicator className="invert" />}
			</Nav>
			<Nav className="ml-auto" navbar>
				<HeaderAsideToggle
					asideToggle={asideToggle}
					isNewsAsideOpen={isNewsAsideOpen}
					newsUnreadCount={newsUnreadCount}
				/>
				<HeaderDropdown
					headerDropdownToggle={headerDropdownToggle}
					isHeaderDropdownOpen={isHeaderDropdownOpen}
					logout={logout}
					openUpsertCharacterModal={openUpsertCharacterModal}
					openNewThreadModal={openNewThreadModal}
					user={user}
				/>
			</Nav>
		</header>
	);
};

Header.propTypes = propTypes;

export default Header;
