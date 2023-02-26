// #region imports
import { Badge } from 'reactstrap';
import { DateTime } from 'luxon';
import NewsItem from '~/types/news/NewsItem';
// #endregion imports

type AsideNewsRowProps = {
	item: NewsItem;
};

const AsideNewsRow = ({ item }: AsideNewsRowProps) => {
	const date = DateTime.fromISO(item.postDate).toFormat('DDD');
	return (
		<div>
			<div
				className={`callout m-0 py-3 ${
					item.isUnread ? 'callout-danger' : 'callout-secondary'
				}`}
			>
				<div>
					<a href={item.postUrl} target="_blank" rel="noopener noreferrer">
						{item.postTitle}
					</a>
				</div>
				<small className="mr-3">{date}</small>
				<Badge color="danger" className={item.isUnread ? 'float-right' : 'd-none'}>
					{' '}
					New
				</Badge>
			</div>
			<hr className="mx-3 my-0" />
		</div>
	);
};

export default AsideNewsRow;
