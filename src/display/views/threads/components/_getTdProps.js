import columns from '../../../../infrastructure/constants/columns';

const getTdProps = (onDeleteTrigger, onEditTrigger, onArchiveTrigger, onQueueTrigger) => {
	const generateTdProps = (state, row, column) => ({
		onClick: (e, handleOriginal) => {
			if (column.id === columns.DELETE_BUTTON.key) {
				onDeleteTrigger(row.original.thread);
				return true;
			}
			if (column.id === columns.EDIT_BUTTON.key) {
				onEditTrigger(row.original.thread);
				return true;
			}
			if (column.id === columns.ARCHIVE_BUTTON.key) {
				onArchiveTrigger(row.original.thread);
				return true;
			}
			if (column.id === columns.QUEUE_BUTTON.key) {
				onQueueTrigger(row.original.thread);
				return true;
			}
			if (handleOriginal) {
				handleOriginal();
			}
			return false;
		}
	});
	return generateTdProps;
};
export default getTdProps;
