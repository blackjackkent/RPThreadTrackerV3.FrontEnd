// #region imports
import React from 'react';
import PropTypes from 'prop-types';
import AsideNewsRow from './AsideNewsRow';
import Style from './_styles';
// #endregion imports

const propTypes = {
	news: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

const Aside = (props) => {
	const { news } = props;
	const items = news.map((item) => <AsideNewsRow item={item} key={item.postId} />);
	return (
		<Style className="aside-menu">
			<div className="callout m-0 py-2 text-center text-uppercase">
				<small>
					<b>RPThreadTracker News</b>
				</small>
			</div>
			<hr className="mx-3 my-0" />
			{news.length ? items : ''}
		</Style>
	);
};

Aside.propTypes = propTypes;
export default Aside;
