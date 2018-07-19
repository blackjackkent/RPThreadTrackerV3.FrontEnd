import columns from '../../../../infrastructure/constants/columns';

const getTdProps = (onDeleteTrigger, onEditTrigger, onArchiveTrigger, onQueueTrigger) =>
	(state, row, column) => ({
		onClick: (e, handleOriginal) => {
			if (column.id === columns.DELETE_BUTTON.key) {
				onDeleteTrigger(row.original.thread);
				return;
			}
			if (column.id === columns.EDIT_BUTTON.key) {
				onEditTrigger(row.original.thread);
				return;
			}
			if (column.id === columns.ARCHIVE_BUTTON.key) {
				onArchiveTrigger(row.original.thread);
				return;
			}
			if (column.id === columns.QUEUE_BUTTON.key) {
				onQueueTrigger(row.original.thread);
				return;
			}
			if (handleOriginal) {
				handleOriginal();
			}
		}
	});
export default getTdProps;
