// #region imports
import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Breadcrumbs from './Breadcrumbs';
import LoadingIndicator from '../LoadingIndicator';
// #endregion imports

const propTypes = {
	isLoadingIconVisible: PropTypes.bool.isRequired
};

const Breadcrumb = props => (
	<div className="breadcrumb-wrapper">
		{props.isLoadingIconVisible && (
			<div data-spec="header-loading-indicator" className="d-lg-none float-right">
				<LoadingIndicator className="invert" />
			</div>
		)}
		<Route path="/:path" component={Breadcrumbs} {...props} />
	</div>
);

Breadcrumb.propTypes = propTypes;
export default Breadcrumb;
