// #region imports
import { shallow } from 'enzyme';
import Character from '../Character';
// #endregion imports

jest.mock('../../../CharacterSelectItem', () => 'CharacterSelectItem');
jest.mock('~/utility', () => ({
	sortCharacters: jest.fn()
}));

describe('data', () => {
	it('should be defined', () => {
		const column = Character();
		expect(column).toBeDefined();
	});
	it('should be configured properly', () => {
		const column = Character();
		expect(column).toHaveProperty('id', 'thread.character.urlIdentifier');
		expect(column).toHaveProperty('Header', 'Character');
		expect(column).toHaveProperty('accessor', expect.any(Function));
		expect(column).toHaveProperty('minWidth', 250);
		expect(column).toHaveProperty('sortable', true);
		expect(column).toHaveProperty('resizable', true);
	});
	it('should generate accessor from character props', () => {
		const column = Character();
		const value = column.accessor({
			thread: {
				character: {
					characterId: 1,
					characterName: 'My Character',
					urlIdentifier: 'my-url-identifier'
				}
			}
		});
		expect(value).toHaveProperty('characterName', 'My Character');
		expect(value).toHaveProperty('urlIdentifier', 'my-url-identifier');
	});
	it('should allow filtering when includeFilter is true', () => {
		const column = Character([], true);
		expect(column).toHaveProperty('filterable', true);
	});
	it('should not allow filtering when includeFilter is false', () => {
		const column = Character([], false);
		expect(column).toHaveProperty('filterable', false);
	});
});
describe('cell', () => {
	it('should display cell with character name if character name exists', () => {
		const column = Character([], false);
		const cellJsx = column.Cell({
			value: {
				urlIdentifier: 'my-character-url',
				characterName: 'My Character'
			}
		});
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('span')).toHaveText('my-character-url (My Character)');
	});
	it('should display cell without character name if character name does not exist', () => {
		const column = Character([], false);
		const cellJsx = column.Cell({
			value: {
				urlIdentifier: 'my-character-url'
			}
		});
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('span')).toHaveText('my-character-url');
	});
});
describe('filter', () => {
	it('should include filter which produces list of characters in select', () => {
		const characters = [
			{
				characterId: 1,
				characterName: 'Character 1',
				urlIdentifier: 'character-1'
			},
			{
				characterId: 2,
				characterName: 'Character 2',
				urlIdentifier: 'character-2'
			},
			{
				characterId: 3,
				characterName: 'Character 3',
				urlIdentifier: 'character-3'
			}
		];
		const column = Character(characters);
		const filterJsx = column.Filter({});
		const filterElement = shallow(filterJsx);
		expect(filterElement.find('option')).toHaveLength(1);
		expect(filterElement.find('CharacterSelectItem')).toHaveLength(3);
	});
	it('should set select value to empty string when filter not set', () => {
		const column = Character([]);
		const filterJsx = column.Filter({});
		const filterElement = shallow(filterJsx);
		expect(filterElement.find('select')).toHaveProp('value', '');
	});
	it('should set select value to selected value when filter set', () => {
		const column = Character([]);
		const filterJsx = column.Filter({
			filter: {
				value: 2
			}
		});
		const filterElement = shallow(filterJsx);
		expect(filterElement.find('select')).toHaveProp('value', 2);
	});
	it('should fire passed onChange handler when select is changed', () => {
		const column = Character([]);
		const onChange = jest.fn();
		const event = {
			target: {
				value: 15
			}
		};
		const filterJsx = column.Filter({
			onChange
		});
		const filterElement = shallow(filterJsx);
		filterElement.find('select').simulate('change', event);
		expect(onChange).toHaveBeenCalledTimes(1);
		expect(onChange).toHaveBeenLastCalledWith(15);
	});
});

describe('filterMethod', () => {
	it('should return true when row character ID matches filter', () => {
		const column = Character();
		const filter = {
			value: '15'
		};
		const row = {
			_original: {
				thread: {
					character: {
						characterId: 15
					}
				}
			}
		};
		const filterResult = column.filterMethod(filter, row);
		expect(filterResult).toBe(true);
	});
	it('should return false when row character ID does not match filter', () => {
		const column = Character();
		const filter = {
			value: '15'
		};
		const row = {
			_original: {
				thread: {
					character: {
						characterId: 16
					}
				}
			}
		};
		const filterResult = column.filterMethod(filter, row);
		expect(filterResult).toBe(false);
	});
});
