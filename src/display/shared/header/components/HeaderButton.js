// #region imports
import React from 'react';
import PropTypes from 'prop-types';
import { NavItem, Button } from 'reactstrap';
// #endregion imports

const propTypes = {
	onClick: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired
};

const HeaderButton = (props) => {
	const {
		onClick,
		label
	} = props;

	return (
		<NavItem>
			<Button
				color="primary"
				onClick={onClick}
			>
				{label}
			</Button>
		</NavItem>
	);
};

HeaderButton.propTypes = propTypes;
export default HeaderButton;
