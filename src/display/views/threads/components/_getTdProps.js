const getTdProps = (onDeleteTrigger, onEditTrigger, onArchiveTrigger, onQueueTrigger) =>
	(state, row, column) => ({
		onClick: (e, handleOriginal) => {
			if (column.id === 'deleteButton') {
				onDeleteTrigger(row.original.thread);
				return;
			}
			if (column.id === 'editButton') {
				onEditTrigger(row.original.thread);
				return;
			}
			if (column.id === 'archiveButton') {
				onArchiveTrigger(row.original.thread);
				return;
			}
			if (column.id === 'queueButton') {
				onQueueTrigger(row.original.thread);
				return;
			}
			if (handleOriginal) {
				handleOriginal();
			}
		}
	});
export default getTdProps;
