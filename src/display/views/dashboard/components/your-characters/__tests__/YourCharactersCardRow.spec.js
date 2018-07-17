// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import YourCharactersCardRow from '../YourCharactersCardRow';
// #endregion imports

const createTestProps = propOverrides => ({
	character: {
		id: 5,
		urlIdentifier: 'my-test-character',
		homeUrl: 'http://my-test-character.tumblr.com'
	},
	threadCount: 15,
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot when character name not supplied', () => {
			const element = shallow(<YourCharactersCardRow {...createTestProps()} />);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot when character name is supplied', () => {
			const props = createTestProps();
			props.character.characterName = 'Test Character';
			const element = shallow(<YourCharactersCardRow {...props} />);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot when thread count is > 1', () => {
			const props = createTestProps();
			props.character.characterName = 'Test Character';
			const element = shallow(<YourCharactersCardRow {...props} />);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot when thread count equals 1', () => {
			const props = createTestProps({ threadCount: 1 });
			const element = shallow(<YourCharactersCardRow {...props} />);
			expect(element).toMatchSnapshot();
		});
	});
});
