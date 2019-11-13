import columns from '~/infrastructure/constants/columns';

const getTdProps = (onDeleteTrigger, onEditTrigger) => (state, row, column) => ({
	onClick: (e, handleOriginal) => {
		if (column.id === columns.EDIT_BUTTON.key) {
			onEditTrigger(row.original);
			return;
		}
		if (column.id === columns.DELETE_BUTTON.key) {
			onDeleteTrigger(row.original);
			return;
		}
		if (handleOriginal) {
			handleOriginal();
		}
	}
});
export default getTdProps;
