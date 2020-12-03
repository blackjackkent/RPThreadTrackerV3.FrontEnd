// #region imports
import { shallow } from 'enzyme';
import { initMockDateNow } from '~/testhelpers/helpers.unit';
import DateQueued from '../DateQueued';
// #endregion imports

initMockDateNow();
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
				thread: {
					dateMarkedQueued: Date.now
				}
			}
		});
		const cellElement = shallow(cellJsx);
		expect(cellElement).toHaveText('June 5, 1989 3:24AM');
	});
});
