// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import CurrentCharacterTable from '../CurrentCharacterTable';
// #endregion imports

// #region mocks
jest.mock('../_columns', () => ([{ id: 'column1' }, { id: 'column2' }]));
jest.mock('../_getTdProps', () => (jest.fn()));
// #endregion mocks

const createTestProps = propOverrides => ({
	characters: [{ characterId: 1 }, { characterId: 2 }],
	openUpsertCharacterModal: jest.fn(),
	toggleCharacterIsOnHiatus: jest.fn(),
	openUntrackCharacterModal: jest.fn(),
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = (<CurrentCharacterTable {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
});
