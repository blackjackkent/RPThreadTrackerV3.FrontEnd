import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	style: PropTypes.shape({}),
	className: PropTypes.string
};
const defaultProps = {
	style: { width: 50, height: 50 },
	className: ''
};
const LoadingIndicator = props => (
	<div className="lds-css ng-scope" style={props.style}>
		<div className={`lds-spinner ${props.className}`} style={{ width: '100%', height: '100%' }}>
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
		</div>
	</div>
);
LoadingIndicator.propTypes = propTypes;
LoadingIndicator.defaultProps = defaultProps;
export default LoadingIndicator;
