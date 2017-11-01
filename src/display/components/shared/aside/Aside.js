import React from 'react';
import PropTypes from 'prop-types';
import AsideNewsRow from './AsideNewsRow';

const propTypes = {
	news: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

const Aside = (props) => {
	const { news } = props;
	return (
		<aside className="aside-menu">
			<div className="callout m-0 py-2 text-center text-uppercase">
				<small><b>RPThreadTracker News</b></small>
			</div>
			<hr className="mx-3 my-0" />
			{
				news.length ? news.map(item => <AsideNewsRow item={item} key={item.id} />) : ''
			}
		</aside>
	);
};

Aside.propTypes = propTypes;

export default Aside;
