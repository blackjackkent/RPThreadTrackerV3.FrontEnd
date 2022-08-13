// #region imports
import React from 'react';
import { Route } from 'react-router-dom';
import { useIsFetching } from 'react-query';
import Breadcrumbs from './Breadcrumbs';
import LoadingIndicator from '../loading/LoadingIndicator';
import Style from './_styles';
import { useIsMutating } from '~/infrastructure/hooks/mutations';
// #endregion imports

const BreadcrumbWrapper = (props) => {
	const isFetching = useIsFetching();
	const isMutating = useIsMutating();
	const isLoading = isFetching !== 0 || isMutating !== 0;
	return (
		<Style className="breadcrumb-wrapper">
			{isLoading && (
				<div className="float-right">
					<LoadingIndicator className="invert" />
				</div>
			)}
			{/* eslint-disable-next-line react/jsx-props-no-spreading */}
			<Route path="/:path" component={Breadcrumbs} {...props} />
		</Style>
	);
};

export default BreadcrumbWrapper;
