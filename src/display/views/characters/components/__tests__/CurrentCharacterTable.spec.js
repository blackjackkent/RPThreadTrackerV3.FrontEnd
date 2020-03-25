// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '~/testhelpers/helpers.unit';
import CurrentCharacterTable from '../CurrentCharacterTable';
// #endregion imports

// #region mocks
jest.mock('../_columns', () => (counts) => [counts]);
jest.mock('../_getTdProps', () => jest.fn());
// #endregion mocks

const createTestProps = (propOverrides) => ({
	threadCounts: {
		5: 10,
		15: 20
	},
	characters: [
		{
			characterId: 1
		},
		{
			characterId: 2
		}
	],
	openUpsertCharacterModal: jest.fn(),
	toggleCharacterIsOnHiatus: jest.fn(),
	openUntrackCharacterModal: jest.fn(),
	isLoadingIconVisible: true,
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = <CurrentCharacterTable {...props} />;
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot when loading icon not visible', () => {
			const props = createTestProps({
				isLoadingIconVisible: false
			});
			const jsx = <CurrentCharacterTable {...props} />;
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
	describe('content', () => {
		it('should populate props on React table', () => {
			const props = createTestProps();
			const jsx = <CurrentCharacterTable {...props} />;
			const element = shallow(jsx);
			const table = getSpecWrapper(element, 'character-react-table');
			expect(table.props().data).toHaveLength(2);
			expect(table.props().columns).toEqual([
				{
					5: 10,
					15: 20
				}
			]);
		});
		it('should show correct loading text if loading in progress', () => {
			const props = createTestProps();
			const jsx = <CurrentCharacterTable {...props} />;
			const element = shallow(jsx);
			const table = getSpecWrapper(element, 'character-react-table');
			expect(table.props().noDataText).toBe('Loading...');
		});
		it('should show correct loading text if loading not in progress', () => {
			const props = createTestProps({
				isLoadingIconVisible: false
			});
			const jsx = <CurrentCharacterTable {...props} />;
			const element = shallow(jsx);
			const table = getSpecWrapper(element, 'character-react-table');
			expect(table.props().noDataText).toBe('No Characters Found');
		});
	});
});
