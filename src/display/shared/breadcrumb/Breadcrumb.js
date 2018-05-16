// #region imports
import React from 'react';
import { Route } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
// #endregion imports

export default props => (
	<div>
		<Route path="/:path" component={Breadcrumbs} {...props} />
	</div>
);
