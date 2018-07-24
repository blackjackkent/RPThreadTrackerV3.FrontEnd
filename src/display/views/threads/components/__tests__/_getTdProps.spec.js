// #region imports
import _getTdProps from '../_getTdProps';
// #endregion imports

describe('behavior', () => {
	describe('onEditTrigger', () => {
		it('should fire when editButton column is clicked', () => {
			const clickedColumn = { id: 'editButton' };
			const clickedRow = { original: { thread: { threadId: 5 } } };
			const onEditTrigger = jest.fn();
			const propsCreator = _getTdProps(jest.fn(), onEditTrigger, jest.fn(), jest.fn());
			const props = propsCreator({}, clickedRow, clickedColumn);
			props.onClick({}, jest.fn());
			expect(onEditTrigger).toHaveBeenCalledTimes(1);
			expect(onEditTrigger).toHaveBeenLastCalledWith({ threadId: 5 });
		});
	});
	describe('onDeleteTrigger', () => {
		it('should fire when deleteButton column is clicked', () => {
			const clickedColumn = { id: 'deleteButton' };
			const clickedRow = { original: { thread: { threadId: 3 } } };
			const onDeleteTrigger = jest.fn();
			const propsCreator = _getTdProps(onDeleteTrigger, jest.fn(), jest.fn(), jest.fn());
			const props = propsCreator({}, clickedRow, clickedColumn);
			props.onClick({}, jest.fn());
			expect(onDeleteTrigger).toHaveBeenCalledTimes(1);
			expect(onDeleteTrigger).toHaveBeenLastCalledWith({ threadId: 3 });
		});
	});
	describe('onArchiveTrigger', () => {
		it('should fire when archiveButton column is clicked', () => {
			const clickedColumn = { id: 'archiveButton' };
			const clickedRow = { original: { thread: { threadId: 4 } } };
			const onArchiveTrigger = jest.fn();
			const propsCreator = _getTdProps(jest.fn(), jest.fn(), onArchiveTrigger, jest.fn());
			const props = propsCreator({}, clickedRow, clickedColumn);
			props.onClick({}, jest.fn());
			expect(onArchiveTrigger).toHaveBeenCalledTimes(1);
			expect(onArchiveTrigger).toHaveBeenLastCalledWith({ threadId: 4 });
		});
	});
	describe('onQueueTrigger', () => {
		it('should fire when queueButton column is clicked', () => {
			const clickedColumn = { id: 'queueButton' };
			const clickedRow = { original: { thread: { threadId: 4 } } };
			const onQueueTrigger = jest.fn();
			const propsCreator = _getTdProps(jest.fn(), jest.fn(), jest.fn(), onQueueTrigger);
			const props = propsCreator({}, clickedRow, clickedColumn);
			props.onClick({}, jest.fn());
			expect(onQueueTrigger).toHaveBeenCalledTimes(1);
			expect(onQueueTrigger).toHaveBeenLastCalledWith({ threadId: 4 });
		});
	});
	describe('handleOriginal', () => {
		it('should fall back to handleOriginal in other cases', () => {
			const clickedColumn = { id: 'userTitle' };
			const clickedRow = { original: { thread: { threadId: 1 } } };
			const handleOriginal = jest.fn();
			const propsCreator = _getTdProps(jest.fn(), jest.fn(), jest.fn(), jest.fn());
			const props = propsCreator({}, clickedRow, clickedColumn);
			props.onClick({}, handleOriginal);
			expect(handleOriginal).toHaveBeenCalledTimes(1);
		});
		it('should run successfully if handleOriginal does not exist', () => {
			const clickedColumn = { id: 'userTitle' };
			const clickedRow = { original: { thread: { threadId: 1 } } };
			const propsCreator = _getTdProps(jest.fn(), jest.fn(), jest.fn(), jest.fn());
			const props = propsCreator({}, clickedRow, clickedColumn);
			props.onClick({}, null);
			expect(true).toBe(true);
		});
	});
});
