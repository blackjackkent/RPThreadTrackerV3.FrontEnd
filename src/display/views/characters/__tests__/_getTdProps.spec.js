// #region imports
import _getTdProps from '../components/_getTdProps';
// #endregion imports

describe('behavior', () => {
	describe('onEditTrigger', () => {
		it('should fire when editButton column is clicked', () => {
			const clickedColumn = { id: 'editButton' };
			const clickedRow = { original: { characterId: 5 } };
			const onEditTrigger = jest.fn();
			const propsCreator = _getTdProps(jest.fn(), onEditTrigger, jest.fn());
			const props = propsCreator({}, clickedRow, clickedColumn);
			props.onClick({}, jest.fn());
			expect(onEditTrigger).toHaveBeenCalledTimes(1);
			expect(onEditTrigger).toHaveBeenLastCalledWith({ characterId: 5 });
		});
	});
	describe('onDeleteTrigger', () => {
		it('should fire when untrackButton column is clicked', () => {
			const clickedColumn = { id: 'untrackButton' };
			const clickedRow = { original: { characterId: 3 } };
			const onDeleteTrigger = jest.fn();
			const propsCreator = _getTdProps(onDeleteTrigger, jest.fn(), jest.fn());
			const props = propsCreator({}, clickedRow, clickedColumn);
			props.onClick({}, jest.fn());
			expect(onDeleteTrigger).toHaveBeenCalledTimes(1);
			expect(onDeleteTrigger).toHaveBeenLastCalledWith({ characterId: 3 });
		});
	});
	describe('onDeleteTrigger', () => {
		it('should fire when toggleHiatusButton column is clicked', () => {
			const clickedColumn = { id: 'toggleHiatusButton' };
			const clickedRow = { original: { characterId: 4 } };
			const onHiatusTrigger = jest.fn();
			const propsCreator = _getTdProps(jest.fn(), jest.fn(), onHiatusTrigger);
			const props = propsCreator({}, clickedRow, clickedColumn);
			props.onClick({}, jest.fn());
			expect(onHiatusTrigger).toHaveBeenCalledTimes(1);
			expect(onHiatusTrigger).toHaveBeenLastCalledWith({ characterId: 4 });
		});
	});
	describe('handleOriginal', () => {
		it('should fall back to handleOriginal in other cases', () => {
			const clickedColumn = { id: 'characterName' };
			const clickedRow = { original: { characterId: 1 } };
			const handleOriginal = jest.fn();
			const propsCreator = _getTdProps(jest.fn(), jest.fn(), jest.fn());
			const props = propsCreator({}, clickedRow, clickedColumn);
			props.onClick({}, handleOriginal);
			expect(handleOriginal).toHaveBeenCalledTimes(1);
		});
	});
});
