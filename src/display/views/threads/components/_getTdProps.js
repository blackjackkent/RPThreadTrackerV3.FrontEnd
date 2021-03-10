import columns from '../../../../infrastructure/constants/columns';

const getTdProps = (onDeleteTrigger, onEditTrigger, onArchiveTrigger, onQueueTrigger) => {
	const generateTdProps = (state, row, column, _instance, toggleSelection) => ({
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

			// there's a bug in react-table where triggering selection state change
			// undoes expansion. this manifests as the expand button not doing anything
			// when clicked. we can workaround because we don't selection to happen
			// on expansion anyway
			if (!column.Expander) {
				toggleSelection();
			}

			if (handleOriginal) {
				handleOriginal();
			}
		}
	});
	return generateTdProps;
};
export default getTdProps;
