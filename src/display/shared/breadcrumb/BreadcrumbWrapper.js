// #region imports
import React from 'react';
import { Route } from 'react-router-dom';
import { useIsFetching } from 'react-query';
import Breadcrumbs from './Breadcrumbs';
import LoadingIndicator from '../loading/LoadingIndicator';
import Style from './_styles';
// #endregion imports

const BreadcrumbWrapper = (props) => {
	const isFetching = useIsFetching();
	return (
		<Style className="breadcrumb-wrapper">
			{isFetching !== 0 && (
				<div data-spec="header-loading-indicator" className="float-right">
					<LoadingIndicator className="invert" />
				</div>
			)}
			<Route path="/:path" component={Breadcrumbs} {...props} />
		</Style>
	);
};

export default BreadcrumbWrapper;
