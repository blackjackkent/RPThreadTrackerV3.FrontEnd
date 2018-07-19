// #region imports
import { shallow } from 'enzyme';
import LastPostDate from '../LastPostDate';
// #endregion imports

const DATE_TO_USE = new Date('June 5, 1989 03:24:00');
const MockDate = Date;
global.Date = jest.fn(() => DATE_TO_USE);
global.Date.UTC = MockDate.UTC;
global.Date.parse = MockDate.parse;
global.Date.now = MockDate.now;

describe('data', () => {
	const column = LastPostDate();
	it('should be defined', () => {
		expect(column).toBeDefined();
	});
	it('should be configured properly', () => {
		expect(column).toHaveProperty('Header', 'Last Post Date');
		expect(column).toHaveProperty('accessor', 'status.LastPostDate');
		expect(column).toHaveProperty('minWidth', 200);
		expect(column).toHaveProperty('filterable', false);
	});
});
describe('cell', () => {
	const column = LastPostDate();
	it('should be returned when last post date column ID is passed', () => {
		expect(column.Header).toBe('Last Post Date');
		expect(column.accessor).toBe('status.LastPostDate');
		expect(column.minWidth).toBe(200);
		expect(column.filterable).toBe(false);
	});
	it('should display Awaiting Starter if status does not exist and thread is not archived', () => {
		const cellJsx = column.Cell({ original: { thread: {} } });
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('span')).toHaveText('Awaiting Starter');
	});
	it('should display Archived if status does not exist and thread is archived', () => {
		const cellJsx = column.Cell({ original: { thread: { isArchived: true } } });
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('span')).toHaveText('Archived');
	});
	it('should display Not Found if LastPostDate is null', () => {
		const cellJsx = column.Cell({ original: { status: {} } });
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('span')).toHaveText('Post Not Found');
	});
	it('should display formatted date if LastPostDate is present', () => {
		const cellJsx = column.Cell({ original: { status: { LastPostDate: new Date(Date.now) } } });
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('time')).toHaveText('June 5, 1989 3:24AM');
	});
});
