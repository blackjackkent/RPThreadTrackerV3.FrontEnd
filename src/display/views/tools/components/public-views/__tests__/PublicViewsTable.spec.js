// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import PublicViewsTable from '../PublicViewsTable';
// #endregion imports

// #region mocks
jest.mock('../_columns', () => () => [
	{
		id: 'column1'
	},
	{
		id: 'column2'
	}
]);
jest.mock('../_getTdProps', () => jest.fn());
// #endregion mocks

const createTestProps = (propOverrides) => ({
	isLoadingIconVisible: true,
	publicViews: [
		{
			publicViewId: 1
		},
		{
			publicViewId: 2
		}
	],
	openUpsertPublicViewModal: jest.fn(),
	openDeletePublicViewModal: jest.fn(),
	username: 'test-user',
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = <PublicViewsTable {...props} />;
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot when loading icon not visible', () => {
			const props = createTestProps({
				isLoadingIconVisible: false
			});
			const jsx = <PublicViewsTable {...props} />;
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
});
