// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import CharacterSelectItem from '../CharacterSelectItem';
// #endregion imports

const createTestProps = (propOverrides) => ({
	character: {
		characterId: 1,
		characterName: 'Test Character',
		urlIdentifier: 'test-character'
	},
	...propOverrides
});
describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = <CharacterSelectItem {...props} />;
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot without character name', () => {
			const props = createTestProps({
				character: {
					characterId: 1,
					urlIdentifier: 'test-character'
				}
			});
			const jsx = <CharacterSelectItem {...props} />;
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
	describe('content', () => {
		it('should provide character ID as option value', () => {
			const props = createTestProps();
			const jsx = <CharacterSelectItem {...props} />;
			const element = shallow(jsx);
			const option = element.find('option');
			expect(option).toHaveProp('value', 1);
		});
		it('should render character name if available', () => {
			const props = createTestProps();
			const jsx = <CharacterSelectItem {...props} />;
			const element = shallow(jsx);
			const text = element.find('option').text();
			expect(text).toBe('test-character (Test Character)');
		});
		it('should render character URL if name unavailable', () => {
			const props = createTestProps({
				character: {
					characterId: 1,
					urlIdentifier: 'test-character'
				}
			});
			const jsx = <CharacterSelectItem {...props} />;
			const element = shallow(jsx);
			const text = element.find('option').text();
			expect(text).toBe('test-character');
		});
	});
});
