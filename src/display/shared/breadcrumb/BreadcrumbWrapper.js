// #region imports
import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Breadcrumbs from './Breadcrumbs';
import LoadingIndicator from '../loading/LoadingIndicator';
import Style from './_styles';
// #endregion imports

const propTypes = {
	isLoadingIconVisible: PropTypes.bool.isRequired
};

const BreadcrumbWrapper = (props) => {
	const { isLoadingIconVisible } = props;
	return (
		<Style className="breadcrumb-wrapper">
			{isLoadingIconVisible && (
				<div data-spec="header-loading-indicator" className="float-right">
					<LoadingIndicator className="invert" />
				</div>
			)}
			<Route path="/:path" component={Breadcrumbs} {...props} />
		</Style>
	);
};

BreadcrumbWrapper.propTypes = propTypes;
export default BreadcrumbWrapper;
