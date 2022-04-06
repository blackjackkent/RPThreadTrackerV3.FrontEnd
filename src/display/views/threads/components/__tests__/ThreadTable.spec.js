// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import ThreadTableWrapper from '../ThreadTableWrapper';
// #endregion imports

jest.mock('../_defaultFilter', () => jest.fn());
jest.mock('../CheckboxTable', () => 'CheckboxTable');
jest.mock('../ThreadBulkUpdateControls', () => 'ThreadBulkUpdateControls');
jest.mock('../ThreadTableSubComponent', () => 'ThreadTableSubComponent');
jest.mock('../TagFilterSelect', () => 'TagFilterSelect');
jest.mock('../ThreadRefreshButton', () => 'ThreadRefreshButton');

const createTestProps = (propOverrides) => ({
	bulkToggleThreadsAreArchived: jest.fn(),
	bulkToggleThreadsAreMarkedQueued: jest.fn(),
	columns: [
		{
			key: 'column1'
		},
		{
			key: 'column2'
		}
	],
	filteredThreads: [
		{
			thread: {
				threadId: 1
			}
		},
		{
			thread: {
				threadId: 2
			}
		},
		{
			thread: {
				threadId: 3
			}
		}
	],
	isArchive: true,
	isLoadingIconVisible: false,
	isQueue: true,
	openBulkUntrackThreadsModal: jest.fn(),
	refreshThreads: jest.fn(),
	setFilteredTag: jest.fn(),
	tags: [
		{
			tagText: 'tag1'
		},
		{
			tagText: 'tag2'
		}
	],
	tdProps: jest.fn(),
	threadFilter: {
		filteredTag: 'tag3'
	},
	threadTablePageSize: 50,
	updateThreadTablePageSize: jest.fn(),
	useLightTheme: false,
	...propOverrides
});
describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = <ThreadTableWrapper {...props} />;
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot when loading', () => {
			const props = createTestProps({
				isLoadingIconVisible: true
			});
			const jsx = <ThreadTableWrapper {...props} />;
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot when items are selected', () => {
			const props = createTestProps({
				isLoadingIconVisible: true
			});
			const jsx = <ThreadTableWrapper {...props} />;
			const element = shallow(jsx);
			element.instance().onSelectionChanged([
				{
					thread: {
						threadId: 1
					}
				},
				{
					thread: {
						threadId: 2
					}
				}
			]);
			element.update();
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot when threadTablePageSize not provided', () => {
			const props = createTestProps({
				threadTablePageSize: null
			});
			const jsx = <ThreadTableWrapper {...props} />;
			const element = shallow(jsx);
			element.instance().onSelectionChanged([
				{
					thread: {
						threadId: 1
					}
				},
				{
					thread: {
						threadId: 2
					}
				}
			]);
			element.update();
			expect(element).toMatchSnapshot();
		});
	});
	describe('subcomponent', () => {
		it('should render tag display based on row thread tags', () => {
			const row = {
				original: {
					thread: {
						threadTags: [
							{
								tagText: 'tag1'
							},
							{
								tagText: 'tag2'
							},
							{
								tagText: 'tag3'
							}
						]
					}
				}
			};
			const props = createTestProps();
			const jsx = <ThreadTableWrapper {...props} />;
			const element = shallow(jsx);
			const subComponentJsx = element.find('CheckboxTable').props().SubComponent(row);
			const subComponent = shallow(subComponentJsx);
			expect(subComponent.props().tags).toHaveLength(3);
		});
	});
});

describe('behavior', () => {
	describe('onSelectionChanged/executeBulkAction', () => {
		it('should collect selection changes and submit them when triggered', () => {
			const testBulkFunction = jest.fn();
			const props = createTestProps();
			const jsx = <ThreadTableWrapper {...props} />;
			const element = shallow(jsx);
			element.instance().onSelectionChanged([
				{
					thread: {
						threadId: 1
					}
				},
				{
					thread: {
						threadId: 2
					}
				}
			]);
			element.instance().onSelectionChanged([
				{
					thread: {
						threadId: 3
					}
				},
				{
					thread: {
						threadId: 4
					}
				}
			]);
			element.instance().executeBulkAction(testBulkFunction);
			expect(testBulkFunction).toHaveBeenCalledTimes(1);
			expect(testBulkFunction).toHaveBeenLastCalledWith([
				{
					threadId: 3
				},
				{
					threadId: 4
				}
			]);
		});
	});
});
