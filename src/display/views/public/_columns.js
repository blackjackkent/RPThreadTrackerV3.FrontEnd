import columnTypes from '../../../infrastructure/constants/columns';
import * as columns from '../../shared/thread-table-columns';

const getColumns = (columnIds) => {
	const result = [];
	if (!columnIds) {
		return result;
	}
	if (columnIds.includes(columnTypes.THREAD_TITLE.key)) {
		result.push(columns.ThreadTitle(false));
	}
	if (columnIds.includes(columnTypes.CHARACTER.key)) {
		result.push(columns.Character([], false));
	}
	if (columnIds.includes(columnTypes.LAST_POSTER.key)) {
		result.push(columns.LastPoster([], false));
	}
	if (columnIds.includes(columnTypes.LAST_POST_DATE.key)) {
		result.push(columns.LastPostDate());
	}
	if (columnIds.includes(columnTypes.TRACKED_PARTNER.key)) {
		result.push(columns.TrackedPartner([], false));
	}
	return result;
};
export default getColumns;
