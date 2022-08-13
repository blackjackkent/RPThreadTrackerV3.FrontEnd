// #region imports
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// #endregion imports

const propTypes = {
	Renderable: PropTypes.func.isRequired
};

const TooltipForm = (props) => {
	const [displayTooltip, setDisplayTooltip] = useState({});
	const { Renderable } = props;

	const showTooltip = (e) => {
		const { name } = e.target;
		setDisplayTooltip({ ...displayTooltip, [name]: true });
	};

	const hideTooltip = (e) => {
		const { name } = e.target;
		setDisplayTooltip({ ...displayTooltip, [name]: false });
	};
	return (
		<Renderable
			tooltipDisplayData={displayTooltip}
			showTooltip={showTooltip}
			hideTooltip={hideTooltip}
			{...props}
		/>
	);
};

TooltipForm.propTypes = propTypes;
export default TooltipForm;
