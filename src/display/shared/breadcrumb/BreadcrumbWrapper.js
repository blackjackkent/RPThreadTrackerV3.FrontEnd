// #region imports
import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Breadcrumbs from './Breadcrumbs';
import LoadingIndicator from '../LoadingIndicator';
import colors from '../../../infrastructure/constants/colors';
// #endregion imports

const propTypes = {
	isLoadingIconVisible: PropTypes.bool.isRequired
};

const Style = styled.div`
	border-bottom: 1px solid ${colors.GRAY_600}; 
	margin-bottom: 1.5rem;
	.light-theme & {
		background-color: ${colors.GRAY_100}
		border-bottom: 1px solid ${colors.GRAY_200}; 
	}
`;

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
