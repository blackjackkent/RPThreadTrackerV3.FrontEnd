// #region imports
import { shallow } from 'enzyme';
import TrackedPartner from '../TrackedPartner';
// #endregion imports

describe('data', () => {
	it('should be defined', () => {
		const column = TrackedPartner();
		expect(column).toBeDefined();
	});
	it('should be configured properly', () => {
		const column = TrackedPartner();
		expect(column).toHaveProperty('Header', 'Tracked Partner');
		expect(column).toHaveProperty('accessor', 'thread.partnerUrlIdentifier');
		expect(column).toHaveProperty('minWidth', 200);
		expect(column).toHaveProperty('sortable', true);
		expect(column).toHaveProperty('resizable', true);
	});
	it('should allow filtering when includeFilter is true', () => {
		const column = TrackedPartner([], true);
		expect(column).toHaveProperty('filterable', true);
	});
	it('should not allow filtering when includeFilter is false', () => {
		const column = TrackedPartner([], false);
		expect(column).toHaveProperty('filterable', false);
	});
});
describe('cell', () => {
	it('should display cell with partner url if partner name exists', () => {
		const column = TrackedPartner([], false);
		const cellJsx = column.Cell({
			value: 'my-partner-url'
		});
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('span')).toHaveText('my-partner-url');
	});
	it('should display cell with empty span if partner name does not exist', () => {
		const column = TrackedPartner([], false);
		const cellJsx = column.Cell({});
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('span')).toHaveText('');
	});
});
describe('filter', () => {
	it('should include filter which produces list of partners in select', () => {
		const partners = ['partner-1', 'partner-2', 'partner-3'];
		const column = TrackedPartner(partners);
		const filterJsx = column.Filter({});
		const filterElement = shallow(filterJsx);
		expect(filterElement.find('option')).toHaveLength(4);
	});
	it('should set select value to empty string when filter not set', () => {
		const column = TrackedPartner([]);
		const filterJsx = column.Filter({});
		const filterElement = shallow(filterJsx);
		expect(filterElement.find('select')).toHaveProp('value', '');
	});
	it('should set select value to selected value when filter set', () => {
		const column = TrackedPartner([]);
		const filterJsx = column.Filter({
			filter: {
				value: 'partner-1'
			}
		});
		const filterElement = shallow(filterJsx);
		expect(filterElement.find('select')).toHaveProp('value', 'partner-1');
	});
	it('should fire passed onChange handler when select is changed', () => {
		const column = TrackedPartner([]);
		const onChange = jest.fn();
		const event = {
			target: {
				value: 'partner-2'
			}
		};
		const filterJsx = column.Filter({
			onChange
		});
		const filterElement = shallow(filterJsx);
		filterElement.find('select').simulate('change', event);
		expect(onChange).toHaveBeenCalledTimes(1);
		expect(onChange).toHaveBeenLastCalledWith('partner-2');
	});
});
