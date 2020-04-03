// #region imports
import { shallow } from 'enzyme';
import LastPoster from '../LastPoster';
// #endregion imports

describe('data', () => {
	it('should be defined', () => {
		const column = LastPoster();
		expect(column).toBeDefined();
	});
	it('should be configured properly', () => {
		const column = LastPoster();
		expect(column).toHaveProperty('Header', 'Last Poster');
		expect(column).toHaveProperty('accessor', 'status.lastPosterUrlIdentifier');
		expect(column).toHaveProperty('minWidth', 250);
		expect(column).toHaveProperty('sortable', true);
		expect(column).toHaveProperty('resizable', true);
	});
	it('should allow filtering when includeFilter is true', () => {
		const column = LastPoster([], true);
		expect(column).toHaveProperty('filterable', true);
	});
	it('should not allow filtering when includeFilter is false', () => {
		const column = LastPoster([], false);
		expect(column).toHaveProperty('filterable', false);
	});
});
describe('cell', () => {
	it('should display link with correct href, text, and icon if last poster exists', () => {
		const column = LastPoster([], false);
		const cellJsx = column.Cell({
			original: {
				status: {
					lastPostUrl: 'http://www.url.com'
				}
			},
			value: 'my-partner-url'
		});
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('a')).toHaveProp('href', 'http://www.url.com');
		expect(cellElement.find('span')).toHaveText('my-partner-url ');
		expect(cellElement.find('i')).toHaveClassName('fa-external-link-alt');
	});
	it('should display empty span if no last poster', () => {
		const column = LastPoster([], false);
		const cellJsx = column.Cell({
			original: {}
		});
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('span')).toHaveText('');
	});
});
describe('filter', () => {
	it('should include filter which produces list of posters in select', () => {
		const posters = ['partner-1', 'partner-2', 'partner-3'];
		const column = LastPoster(posters);
		const filterJsx = column.Filter({});
		const filterElement = shallow(filterJsx);
		expect(filterElement.find('option')).toHaveLength(4);
	});
	it('should set select value to empty string when filter not set', () => {
		const column = LastPoster([]);
		const filterJsx = column.Filter({});
		const filterElement = shallow(filterJsx);
		expect(filterElement.find('select')).toHaveProp('value', '');
	});
	it('should set select value to selected value when filter set', () => {
		const column = LastPoster([]);
		const filterJsx = column.Filter({
			filter: {
				value: 'partner-2'
			}
		});
		const filterElement = shallow(filterJsx);
		expect(filterElement.find('select')).toHaveProp('value', 'partner-2');
	});
	it('should fire passed onChange handler when select is changed', () => {
		const column = LastPoster([]);
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
