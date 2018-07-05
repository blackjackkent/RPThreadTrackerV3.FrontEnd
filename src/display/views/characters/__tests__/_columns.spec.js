// #region imports
import { shallow } from 'enzyme';
import _columns from '../components/_columns';
// #endregion imports

describe('data', () => {
	describe('editButton', () => {
		const columnConfig = _columns.find(c => c.id === 'editButton');
		it('should be defined', () => {
			expect(columnConfig).toBeDefined();
		});
		it('should have cell with font-awesome element', () => {
			const cellJsx = columnConfig.Cell({ original: { isOnHiatus: false } });
			const cellElement = shallow(cellJsx);
			expect(cellElement.find('i')).toHaveClassName('fa-edit');
		});
		it('should not appear muted if character is not on hiatus', () => {
			const cellJsx = columnConfig.Cell({ original: { isOnHiatus: false } });
			const cellElement = shallow(cellJsx);
			expect(cellElement.find('span')).not.toHaveClassName('text-muted');
		});
		it('should appear muted if character is on hiatus', () => {
			const cellJsx = columnConfig.Cell({ original: { isOnHiatus: true } });
			const cellElement = shallow(cellJsx);
			expect(cellElement.find('span')).toHaveClassName('text-muted');
		});
		it('should be configured', () => {
			expect(columnConfig.width).toBe(30);
			expect(columnConfig.sortable).toBe(false);
			expect(columnConfig.resizable).toBe(false);
			expect(columnConfig.filterable).toBe(false);
		});
	});
	describe('toggleHiatusButton', () => {
		const columnConfig = _columns.find(c => c.id === 'toggleHiatusButton');
		it('should be defined', () => {
			expect(columnConfig).toBeDefined();
		});
		it('should have cell with font-awesome element', () => {
			const cellJsx = columnConfig.Cell({ original: { isOnHiatus: false } });
			const cellElement = shallow(cellJsx);
			expect(cellElement.find('i')).toHaveClassName('fa-power-off');
		});
		it('should appear unmuted and with correct text if character is not on hiatus', () => {
			const cellJsx = columnConfig.Cell({ original: { isOnHiatus: false } });
			const cellElement = shallow(cellJsx);
			expect(cellElement.find('span')).not.toHaveClassName('text-muted');
			expect(cellElement.find('i')).toHaveProp('title', 'Set On Hiatus');
		});
		it('should appear muted and with correct text if character is on hiatus', () => {
			const cellJsx = columnConfig.Cell({ original: { isOnHiatus: true } });
			const cellElement = shallow(cellJsx);
			expect(cellElement.find('span')).toHaveClassName('text-muted');
			expect(cellElement.find('i')).toHaveProp('title', 'Remove from Hiatus');
		});
		it('should be configured', () => {
			expect(columnConfig.width).toBe(30);
			expect(columnConfig.sortable).toBe(false);
			expect(columnConfig.resizable).toBe(false);
			expect(columnConfig.filterable).toBe(false);
		});
	});
	describe('untrackButton', () => {
		const columnConfig = _columns.find(c => c.id === 'untrackButton');
		it('should be defined', () => {
			expect(columnConfig).toBeDefined();
		});
		it('should have cell with font-awesome element', () => {
			const cellJsx = columnConfig.Cell({ original: { isOnHiatus: false } });
			const cellElement = shallow(cellJsx);
			expect(cellElement.find('i')).toHaveClassName('fa-trash-alt');
		});
		it('should appear unmuted if character is not on hiatus', () => {
			const cellJsx = columnConfig.Cell({ original: { isOnHiatus: false } });
			const cellElement = shallow(cellJsx);
			expect(cellElement.find('span')).not.toHaveClassName('text-muted');
		});
		it('should appear muted if character is on hiatus', () => {
			const cellJsx = columnConfig.Cell({ original: { isOnHiatus: true } });
			const cellElement = shallow(cellJsx);
			expect(cellElement.find('span')).toHaveClassName('text-muted');
		});
		it('should be configured', () => {
			expect(columnConfig.width).toBe(30);
			expect(columnConfig.sortable).toBe(false);
			expect(columnConfig.resizable).toBe(false);
			expect(columnConfig.filterable).toBe(false);
		});
	});
	describe('characterName', () => {
		const columnConfig = _columns.find(c => c.accessor === 'characterName');
		it('should be defined', () => {
			expect(columnConfig).toBeDefined();
		});
		it('should have header', () => {
			expect(columnConfig).toHaveProperty('Header', 'Character Name');
		});
		it('should appear unmuted if character is not on hiatus', () => {
			const cellJsx = columnConfig.Cell({ original: { isOnHiatus: false } });
			const cellElement = shallow(cellJsx);
			expect(cellElement.find('span')).not.toHaveClassName('text-muted');
		});
		it('should appear muted if character is on hiatus', () => {
			const cellJsx = columnConfig.Cell({ original: { isOnHiatus: true } });
			const cellElement = shallow(cellJsx);
			expect(cellElement.find('span')).toHaveClassName('text-muted');
		});
		it('should display character name if it exists', () => {
			const cellJsx = columnConfig.Cell({ original: { isOnHiatus: true }, value: 'My Character Name' });
			const cellElement = shallow(cellJsx);
			expect(cellElement.find('span')).toHaveText('My Character Name');
		});
		it('should display character name if it exists', () => {
			const cellJsx = columnConfig.Cell({ original: { isOnHiatus: true } });
			const cellElement = shallow(cellJsx);
			expect(cellElement.find('span')).toHaveText('Unnamed Character');
		});
	});
	describe('urlIdentifier', () => {
		const columnConfig = _columns.find(c => c.accessor === 'urlIdentifier');
		it('should be defined', () => {
			expect(columnConfig).toBeDefined();
		});
		it('should have header', () => {
			expect(columnConfig).toHaveProperty('Header', 'URL Identifier');
		});
		it('should appear unmuted if character is not on hiatus', () => {
			const cellJsx = columnConfig.Cell({ original: { isOnHiatus: false } });
			const cellElement = shallow(cellJsx);
			expect(cellElement.find('a')).not.toHaveClassName('text-muted');
		});
		it('should appear muted if character is on hiatus', () => {
			const cellJsx = columnConfig.Cell({ original: { isOnHiatus: true } });
			const cellElement = shallow(cellJsx);
			expect(cellElement.find('a')).toHaveClassName('text-muted');
		});
		it('should display character identifier', () => {
			const cellJsx = columnConfig.Cell({ original: { isOnHiatus: true }, value: 'my-url-identifier' });
			const cellElement = shallow(cellJsx);
			expect(cellElement.find('a')).toHaveText('my-url-identifier');
		});
		it('should link to character home URL', () => {
			const cellJsx = columnConfig.Cell({ original: { isOnHiatus: true, homeUrl: 'http://my-url-identifier.tumblr.com' } });
			const cellElement = shallow(cellJsx);
			expect(cellElement.find('a')).toHaveProp('href', 'http://my-url-identifier.tumblr.com');
		});
	});
	describe('platformId', () => {
		const columnConfig = _columns.find(c => c.accessor === 'platformId');
		it('should be defined', () => {
			expect(columnConfig).toBeDefined();
		});
		it('should have header', () => {
			expect(columnConfig).toHaveProperty('Header', 'Platform');
		});
		it('should appear unmuted if character is not on hiatus', () => {
			const cellJsx = columnConfig.Cell({ original: { isOnHiatus: false } });
			const cellElement = shallow(cellJsx);
			expect(cellElement.find('span')).not.toHaveClassName('text-muted');
		});
		it('should appear muted if character is on hiatus', () => {
			const cellJsx = columnConfig.Cell({ original: { isOnHiatus: true } });
			const cellElement = shallow(cellJsx);
			expect(cellElement.find('span')).toHaveClassName('text-muted');
		});
		it('should display platform name', () => {
			const cellJsx = columnConfig.Cell({ original: { isOnHiatus: true }, value: 1 });
			const cellElement = shallow(cellJsx);
			expect(cellElement.find('span')).toHaveText('Tumblr');
		});
	});
	describe('isOnHiatus', () => {
		const columnConfig = _columns.find(c => c.accessor === 'isOnHiatus');
		it('should be defined', () => {
			expect(columnConfig).toBeDefined();
		});
		it('should appear unmuted and with correct text if character is not on hiatus', () => {
			const cellJsx = columnConfig.Cell({ value: false });
			const cellElement = shallow(cellJsx);
			expect(cellElement.find('span')).not.toHaveClassName('text-muted');
			expect(cellElement.find('span')).toHaveText('Active');
		});
		it('should appear muted and with correct text if character is on hiatus', () => {
			const cellJsx = columnConfig.Cell({ value: true });
			const cellElement = shallow(cellJsx);
			expect(cellElement.find('span')).toHaveClassName('text-muted');
			expect(cellElement.find('span')).toHaveText('On Hiatus');
		});
	});
});
