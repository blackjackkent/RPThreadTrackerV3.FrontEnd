import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import GoogleAnalytics from 'react-ga';

GoogleAnalytics.initialize('UA-37563721-3');

const withPageViewTracker = (WrappedComponent, options = {}) => {
	const propTypes = {
		location: PropTypes.shape({
			pathname: PropTypes.string
		}).isRequired
	};
	const trackPage = (page) => {
		GoogleAnalytics.set({
			page,
			...options
		});
		GoogleAnalytics.pageview(page);
	};

	const HOC = (props) => {
		const { location } = props;
		const currentPage = location.pathname;
		useEffect(() => {
			trackPage(currentPage);
		}, [currentPage]);

		return <WrappedComponent {...props} />;
	};
	HOC.propTypes = propTypes;
	return HOC;
};

export default withPageViewTracker;
