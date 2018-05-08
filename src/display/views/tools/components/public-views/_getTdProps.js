const getTdProps = (onDeleteTrigger, onEditTrigger) =>
	(state, row, column) => ({
		onClick: (e, handleOriginal) => {
			if (column.id === 'editButton') {
				onEditTrigger(row.original);
				return;
			}
			if (column.id === 'deleteButton') {
				onDeleteTrigger(row.original);
				return;
			}
			if (handleOriginal) {
				handleOriginal();
			}
		}
	});
export default getTdProps;
