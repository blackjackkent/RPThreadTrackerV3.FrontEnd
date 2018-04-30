import React, { Component } from 'react';
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

	const HOC = class extends Component {
		componentDidMount() {
			const page = this.props.location.pathname;
			trackPage(page);
		}

		componentWillReceiveProps(nextProps) {
			const currentPage = this.props.location.pathname;
			const nextPage = nextProps.location.pathname;

			if (currentPage !== nextPage) {
				trackPage(nextPage);
			}
		}

		render() {
			return <WrappedComponent {...this.props} />;
		}
	};
	HOC.propTypes = propTypes;
	return HOC;
};

export default withPageViewTracker;
