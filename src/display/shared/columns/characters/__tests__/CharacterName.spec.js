// #region imports
import { shallow } from 'enzyme';
import CharacterName from '../CharacterName';
// #endregion imports

describe('data', () => {
	const column = CharacterName();
	it('should be defined', () => {
		expect(column).toBeDefined();
	});
	it('should have header', () => {
		expect(column).toHaveProperty('Header', 'Character Name');
	});
	it('should appear unmuted if character is not on hiatus', () => {
		const cellJsx = column.Cell({
			original: {
				isOnHiatus: false
			}
		});
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('span')).not.toHaveClassName('text-muted');
	});
	it('should appear muted if character is on hiatus', () => {
		const cellJsx = column.Cell({
			original: {
				isOnHiatus: true
			}
		});
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('span')).toHaveClassName('text-muted');
	});
	it('should display character name if it exists', () => {
		const cellJsx = column.Cell({
			original: {
				isOnHiatus: true
			},
			value: 'My Character Name'
		});
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('span')).toHaveText('My Character Name');
	});
	it('should display default for character name if it does not exist', () => {
		const cellJsx = column.Cell({
			original: {
				isOnHiatus: true
			}
		});
		const cellElement = shallow(cellJsx);
		expect(cellElement.find('span')).toHaveText('Unnamed Character');
	});
});
