// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import PublicThreadTable from '../PublicThreadTable';
// #endregion imports

const createTestProps = propOverrides => ({
	columns: [{}, {}, {}],
	threads: [{ thread: { threadId: 1, userTitle: 'Title 1' } }, { thread: { threadId: 2, userTitle: 'Title 2' } }],
	view: {
		id: 1,
		name: 'Test View',
		sortKey: 'test-key',
		sortDescending: true
	},
	isLoadingIconVisible: false,
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const element = shallow(<PublicThreadTable {...createTestProps()} />);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot when loading', () => {
			const element = shallow(
				<PublicThreadTable {...createTestProps({ isLoadingIconVisible: true })} />
			);
			expect(element).toMatchSnapshot();
		});
	});
});
