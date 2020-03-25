// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '~/testhelpers/helpers.unit';
import YourCharactersCard from '../YourCharactersCard';
// #endregion imports

// #region mocks
jest.mock('../YourCharactersCardRow', () => 'YourCharactersCardRow');
jest.mock('../../NoCharactersMessage', () => 'NoCharactersMessage');
jest.mock('../../NoActiveCharactersMessage', () => 'NoActiveCharactersMessage');
jest.mock('~/display/shared/loading/LoadingIndicator', () => 'LoadingIndicator');
// #endregion mocks

const createTestProps = (propOverrides) => ({
	characters: [],
	characterThreadCounts: {},
	loadingInProgress: false,
	...propOverrides
});
const createTestPropsLoading = () => createTestProps({
	loadingInProgress: true
});
const createTestPropsNoCharacters = () => createTestProps({});
const createTestPropsNoActiveCharacters = () => createTestProps({
	characters: [
		{
			isOnHiatus: true
		},
		{
			isOnHiatus: true
		}
	]
});
const createTestPropsCharacters = () => createTestProps({
	characters: [
		{
			characterId: 2
		},
		{
			characterId: 3
		}
	],
	characterThreadCounts: {
		2: 15,
		3: 30
	}
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot when characters are loading', () => {
			const element = shallow(<YourCharactersCard {...createTestPropsLoading()} />);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot when user has no characters', () => {
			const element = shallow(<YourCharactersCard {...createTestPropsNoCharacters()} />);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot when user has no active characters', () => {
			const element = shallow(
				<YourCharactersCard {...createTestPropsNoActiveCharacters()} />
			);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot when user has active characters', () => {
			const element = shallow(<YourCharactersCard {...createTestPropsCharacters()} />);
			expect(element).toMatchSnapshot();
		});
	});
	describe('content', () => {
		it('should render item for each character', () => {
			const element = shallow(<YourCharactersCard {...createTestPropsCharacters()} />);
			const rows = getSpecWrapper(element, 'your-characters-card-row');
			expect(rows).toHaveLength(2);
		});
	});
});
