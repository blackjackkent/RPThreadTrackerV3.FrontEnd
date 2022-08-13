// #region imports
import React from 'react';
import AsideNewsRow from './AsideNewsRow';
import Style from './_styles';
import { useNewsQuery } from '~/infrastructure/hooks/queries';
// #endregion imports

const AsideContainer = () => {
	const { markedNews } = useNewsQuery();
	const items = markedNews.map((item) => <AsideNewsRow item={item} key={item.postId} />);
	return (
		<Style className="aside-menu">
			<div className="callout m-0 py-2 text-center text-uppercase">
				<small>
					<b>RPThreadTracker News</b>
				</small>
			</div>
			<hr className="mx-3 my-0" />
			{markedNews.length ? items : ''}
		</Style>
	);
};
export default AsideContainer;
