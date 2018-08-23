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

const Breadcrumb = (props) => {
	const { isLoadingIconVisible } = props;
	return (
		<div className="breadcrumb-wrapper">
			{isLoadingIconVisible && (
				<div data-spec="header-loading-indicator" className="float-right">
					<LoadingIndicator className="invert" />
				</div>
			)}
			<Route path="/:path" component={Breadcrumbs} {...props} />
		</div>
	);
};

Breadcrumb.propTypes = propTypes;
export default Breadcrumb;
