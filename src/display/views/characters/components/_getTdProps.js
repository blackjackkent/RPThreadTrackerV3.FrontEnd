const getTdProps = (onDeleteTrigger, onEditTrigger, onHiatusTrigger) =>
	(state, row, column) => ({
		onClick: (e, handleOriginal) => {
			if (column.id === 'editButton') {
				onEditTrigger(row.original);
				return;
			}
			if (column.id === 'toggleHiatusButton') {
				onHiatusTrigger(row.original);
				return;
			}
			if (column.id === 'untrackButton') {
				onDeleteTrigger(row.original);
				return;
			}
			if (handleOriginal) {
				handleOriginal();
			}
		}
	});
export default getTdProps;
