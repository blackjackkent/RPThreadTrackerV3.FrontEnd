// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '../../../../../config/tests/helpers.unit';
import CharacterSelect from '../../character-select/CharacterSelect';
// #endregion imports

jest.mock('../../character-select/CharacterSelectItem', () => 'CharacterSelectItem');

const createTestProps = propOverrides => ({
	characters: [],
	onSelectCharacter: jest.fn(),
	...propOverrides
});
describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = (<CharacterSelect {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot with items', () => {
			const props = createTestProps({
				characters: [
					{ characterId: 1 },
					{ characterId: 2 },
					{ characterId: 3 }
				]
			});
			const jsx = (<CharacterSelect {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot with items and no null value', () => {
			const props = createTestProps({
				characters: [
					{ characterId: 1 },
					{ characterId: 2 },
					{ characterId: 3 }
				],
				includeNullValue: false
			});
			const jsx = (<CharacterSelect {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot with non-default props', () => {
			const props = createTestProps({
				selectedCharacterId: 5,
				defaultText: 'Select a Character'
			});
			const jsx = (<CharacterSelect {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
	describe('initial load', () => {
		it('should display blank when no characters', () => {
			const props = createTestProps({
				characters: []
			});
			const jsx = (<CharacterSelect {...props} />);
			const element = shallow(jsx);
			const items = element.find('CharacterSelectItem');
			expect(items).toHaveLength(0);
		});
		it('should display characters', () => {
			const props = createTestProps({
				characters: [
					{ characterId: 1 },
					{ characterId: 2 },
					{ characterId: 3 }
				]
			});
			const jsx = (<CharacterSelect {...props} />);
			const element = shallow(jsx);
			const items = element.find('CharacterSelectItem');
			const nullValues = getSpecWrapper(element, 'character-select-null-value');
			expect(items).toHaveLength(3);
			expect(nullValues).toHaveLength(1);
		});
		it('should display characters without null value', () => {
			const props = createTestProps({
				characters: [
					{ characterId: 1 },
					{ characterId: 2 },
					{ characterId: 3 }
				],
				includeNullValue: false
			});
			const jsx = (<CharacterSelect {...props} />);
			const element = shallow(jsx);
			const items = element.find('CharacterSelectItem');
			const nullValues = getSpecWrapper(element, 'character-select-null-value');
			expect(items).toHaveLength(3);
			expect(nullValues).toHaveLength(0);
		});
	});
});

describe('behavior', () => {
	describe('onSelectCharacter', () => {
		it('should be called when field value changes', () => {
			const onSelectCharacter = jest.fn();
			const mockEvent = { target: { value: 10 } };
			const props = createTestProps({ onSelectCharacter });
			const jsx = (<CharacterSelect {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'character-select-field');
			field.simulate('change', mockEvent);
			expect(onSelectCharacter).toHaveBeenCalledTimes(1);
			expect(onSelectCharacter).toHaveBeenLastCalledWith(10);
		});
	});
});
