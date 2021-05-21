// #region imports
import { shallow } from 'enzyme';
import QueueButton from '../QueueButton';
// #endregion imports

describe('data', () => {
	const queuePageColumn = QueueButton(true);
	const nonQueuePageColumn = QueueButton();
	it('should be defined', () => {
		expect(queuePageColumn).toBeDefined();
		expect(nonQueuePageColumn).toBeDefined();
	});
	it('should have cell with font-awesome element and correct title when on queue page', () => {
		const cellJsx = queuePageColumn.Cell();
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('i')).toHaveClassName('fa-clock');
		expect(cellElement.find('i')).toHaveProp('title', 'Unmark Thread Queued');
	});
	it('should have cell with font-awesome element and correct title when not on queue page', () => {
		const cellJsx = nonQueuePageColumn.Cell();
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('i')).toHaveClassName('fa-clock');
		expect(cellElement.find('i')).toHaveProp('title', 'Mark Thread Queued');
	});
	it('should be configured', () => {
		expect(queuePageColumn.width).toBe(30);
		expect(queuePageColumn.sortable).toBe(false);
		expect(queuePageColumn.resizable).toBe(false);
		expect(queuePageColumn.filterable).toBe(false);
	});
});
