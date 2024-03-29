// #region imports
import React from 'react';
import PropTypes from 'prop-types';
import { NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
				toggle={() => setIsHeaderProfileDropdownVisible(!isHeaderProfileDropdownVisible)}
			>
				<DropdownToggle className="nav-link dropdown-toggle">
					<FontAwesomeIcon icon={['fas', 'user']} />
				</DropdownToggle>
				<DropdownMenu right className={isHeaderProfileDropdownVisible ? 'show' : ''}>
					<DropdownItem>
						<span className="text-center">
							Logged in as:
							<br />
							<strong>{user.userName}</strong>
						</span>
					</DropdownItem>
					<HeaderDropdownItem
						onClick={() => navigate('/settings')}
						label="Account Settings"
					/>
					<HeaderDropdownItem onClick={() => navigate('/tools')} label="Tracker Tools" />
					<HeaderDropdownItem onClick={() => navigate('/help')} label="Help" />
					<HeaderDropdownItem onClick={() => navigate('/logout')} label="Logout" />
				</DropdownMenu>
			</Dropdown>
		</NavItem>
	);
};
HeaderProfileDropdown.propTypes = propTypes;
export default HeaderProfileDropdown;
