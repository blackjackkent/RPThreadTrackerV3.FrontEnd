// #region imports
import _getTdProps from '../_getTdProps';
// #endregion imports

describe('behavior', () => {
	describe('onEditTrigger', () => {
		it('should fire when editButton column is clicked', () => {
			const clickedColumn = { id: 'editButton' };
			const clickedRow = { original: { publicViewId: 5 } };
			const onEditTrigger = jest.fn();
			const propsCreator = _getTdProps(jest.fn(), onEditTrigger, jest.fn());
			const props = propsCreator({}, clickedRow, clickedColumn);
			props.onClick({}, jest.fn());
			expect(onEditTrigger).toHaveBeenCalledTimes(1);
			expect(onEditTrigger).toHaveBeenLastCalledWith({ publicViewId: 5 });
		});
	});
	describe('onDeleteTrigger', () => {
		it('should fire when deleteButton column is clicked', () => {
			const clickedColumn = { id: 'deleteButton' };
			const clickedRow = { original: { publicViewId: 3 } };
			const onDeleteTrigger = jest.fn();
			const propsCreator = _getTdProps(onDeleteTrigger, jest.fn(), jest.fn());
			const props = propsCreator({}, clickedRow, clickedColumn);
			props.onClick({}, jest.fn());
			expect(onDeleteTrigger).toHaveBeenCalledTimes(1);
			expect(onDeleteTrigger).toHaveBeenLastCalledWith({ publicViewId: 3 });
		});
	});
	describe('handleOriginal', () => {
		it('should fall back to handleOriginal in other cases', () => {
			const clickedColumn = { id: 'characterName' };
			const clickedRow = { original: { publicViewId: 1 } };
			const handleOriginal = jest.fn();
			const propsCreator = _getTdProps(jest.fn(), jest.fn(), jest.fn());
			const props = propsCreator({}, clickedRow, clickedColumn);
			props.onClick({}, handleOriginal);
			expect(handleOriginal).toHaveBeenCalledTimes(1);
		});
		it('should run successfully if handleOriginal does not exist', () => {
			const clickedColumn = { id: 'characterName' };
			const clickedRow = { original: { publicViewId: 1 } };
			const propsCreator = _getTdProps(jest.fn(), jest.fn(), jest.fn());
			const props = propsCreator({}, clickedRow, clickedColumn);
			props.onClick({}, null);
			expect(true).toBe(true);
		});
	});
});
