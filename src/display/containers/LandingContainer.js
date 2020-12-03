// #region imports
import React from 'react';
import withPageViewTracker from '../../infrastructure/withPageViewTracker';
import Landing from '../views/landing/Landing';
// #endregion imports

const LandingContainer = () => {
	const currentYear = new Date().getFullYear();
	return <Landing currentYear={currentYear} />;
};
export default withPageViewTracker(LandingContainer);
