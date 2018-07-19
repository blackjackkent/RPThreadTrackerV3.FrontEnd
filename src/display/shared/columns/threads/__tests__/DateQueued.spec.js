// #region imports
import { shallow } from 'enzyme';
import DateQueued from '../DateQueued';
// #endregion imports

const DATE_TO_USE = new Date('June 5, 1989 03:24:00');
const MockDate = Date;
global.Date = jest.fn(() => DATE_TO_USE);
global.Date.UTC = MockDate.UTC;
global.Date.parse = MockDate.parse;
global.Date.now = MockDate.now;

describe('data', () => {
	const column = DateQueued();
	it('should be defined', () => {
		expect(column).toBeDefined();
	});
	it('should be configured properly', () => {
		expect(column).toHaveProperty('Header', 'Date Queued');
		expect(column).toHaveProperty('accessor', 'thread.dateMarkedQueued');
		expect(column).toHaveProperty('minWidth', 200);
		expect(column).toHaveProperty('filterable', false);
	});
});
describe('cell', () => {
	it('should display cell with formatted date if thread is marked queued', () => {
		const column = DateQueued();
		const cellJsx = column.Cell({
			original: {
				thread: { dateMarkedQueued: Date.now }
			}
		});
		const cellElement = shallow(cellJsx);
		expect(cellElement).toHaveText('June 5, 1989 3:24AM');
	});
});
