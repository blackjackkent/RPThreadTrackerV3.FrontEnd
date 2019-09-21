// #region imports
import React from 'react';
import { getSpecWrapper, shallowWithState } from '~/testhelpers/helpers.unit';
import Tools from '../Tools';
// #endregion imports

// #region mocks
jest.mock('../components/ManagePublicViewsPane', () => 'ManagePublicViewsPane');
jest.mock('../components/BrowserExtensionsPane', () => 'BrowserExtensionsPane');
jest.mock('../components/ExportThreadsPane', () => 'ExportThreadsPane');
jest.mock('../components/ManageTagsPane', () => 'ManageTagsPane');
jest.mock('../../../../infrastructure/actions', () => ({}));
jest.mock('../../../../infrastructure/selectors', () => ({
	getIsLoadingIconVisible: () => true,
	getIsManageTagsLoadingIconVisible: () => true
}));
jest.mock('../../../../infrastructure/constants/tabs', () => ({
	TOOLS: {
		TAB1: {
			href: '/tools/tab1',
			name: 'Tab 1'
		},
		TAB2: {
			tabId: '/tools/tab2',
			name: 'Tab 2'
		}
	}
}));
jest.mock('../../../shared/static/StaticTabNav', () => 'StaticTabNav');
jest.mock('../../../shared/static/StaticDropdownNav', () => 'StaticDropdownNav');
// #endregion mocks

const createTestProps = propOverrides => ({
	fetchCharacters: jest.fn(),
	fetchTags: jest.fn(),
	fetchUser: jest.fn(),
	fetchPublicViews: jest.fn(),
	setActiveToolsTab: jest.fn(),
	exportThreads: jest.fn(),
	openUpsertPublicViewModal: jest.fn(),
	openDeletePublicViewModal: jest.fn(),
	openBulkUpdateTagModal: jest.fn(),
	openBulkDeleteTagModal: jest.fn(),
	match: {
		url: '/tools/tab1',
		params: { tabId: 'tab1' }
	},
	...propOverrides
});

const createTestState = stateOverrides => ({
	user: { id: '12345', userName: 'test-user' },
	tags: ['tag1', 'tag2', 'tag3'],
	publicViews: [{}, {}, {}, {}],
	characters: [{}, {}],
	ui: { isBulkUpdateTagModalOpen: true, isBulkDeleteTagModalOpen: true },
	...stateOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const state = createTestState();
			const jsx = (<Tools {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
	});
	describe('options', () => {
		it('should populate options from imported tabs on dropdown nav', () => {
			const props = createTestProps();
			const state = createTestState();
			const jsx = (<Tools {...props} />);
			const element = shallowWithState(jsx, state).dive();
			const form = getSpecWrapper(element, 'tools-static-dropdown-nav');
			const { options } = form.props();
			expect(options).toHaveLength(2);
		});
		it('should populate options from imported tabs on tab nav', () => {
			const props = createTestProps();
			const state = createTestState();
			const jsx = (<Tools {...props} />);
			const element = shallowWithState(jsx, state).dive();
			const form = getSpecWrapper(element, 'tools-static-tab-nav');
			const { options } = form.props();
			expect(options).toHaveLength(2);
		});
	});
});

describe('behavior', () => {
	describe('componentDidMount', () => {
		it('should retrieve tags when tags are not loaded', () => {
			const fetchTags = jest.fn();
			const props = createTestProps({ fetchTags });
			const state = createTestState({ tags: [] });
			const jsx = (<Tools {...props} />);
			shallowWithState(jsx, state).dive();
			expect(fetchTags).toHaveBeenCalledTimes(1);
		});
		it('should not retrieve tags when tags are loaded', () => {
			const fetchTags = jest.fn();
			const props = createTestProps({ fetchTags });
			const state = createTestState();
			const jsx = (<Tools {...props} />);
			shallowWithState(jsx, state).dive();
			expect(fetchTags).toHaveBeenCalledTimes(0);
		});
		it('should retrieve public views when public views are not loaded', () => {
			const fetchPublicViews = jest.fn();
			const props = createTestProps({ fetchPublicViews });
			const state = createTestState({ publicViews: [] });
			const jsx = (<Tools {...props} />);
			shallowWithState(jsx, state).dive();
			expect(fetchPublicViews).toHaveBeenCalledTimes(1);
		});
		it('should not retrieve public views when public views are loaded', () => {
			const fetchPublicViews = jest.fn();
			const props = createTestProps({ fetchPublicViews });
			const state = createTestState();
			const jsx = (<Tools {...props} />);
			shallowWithState(jsx, state).dive();
			expect(fetchPublicViews).toHaveBeenCalledTimes(0);
		});
		it('should retrieve characters when characters are not loaded', () => {
			const fetchCharacters = jest.fn();
			const props = createTestProps({ fetchCharacters });
			const state = createTestState({ characters: [] });
			const jsx = (<Tools {...props} />);
			shallowWithState(jsx, state).dive();
			expect(fetchCharacters).toHaveBeenCalledTimes(1);
		});
		it('should not retrieve characters when characters are loaded', () => {
			const fetchCharacters = jest.fn();
			const props = createTestProps({ fetchCharacters });
			const state = createTestState();
			const jsx = (<Tools {...props} />);
			shallowWithState(jsx, state).dive();
			expect(fetchCharacters).toHaveBeenCalledTimes(0);
		});
		it('should retrieve user when user is not loaded', () => {
			const fetchUser = jest.fn();
			const props = createTestProps({ fetchUser });
			const state = createTestState({ user: {} });
			const jsx = (<Tools {...props} />);
			shallowWithState(jsx, state).dive();
			expect(fetchUser).toHaveBeenCalledTimes(1);
		});
		it('should not retrieve user when user is loaded', () => {
			const fetchUser = jest.fn();
			const props = createTestProps({ fetchUser });
			const state = createTestState({ user: { id: '12345', userName: 'my-user' } });
			const jsx = (<Tools {...props} />);
			shallowWithState(jsx, state).dive();
			expect(fetchUser).toHaveBeenCalledTimes(0);
		});
	});
	describe('onExportRequest', () => {
		it('should trigger export action', () => {
			const exportThreads = jest.fn();
			const props = createTestProps({ exportThreads });
			const state = createTestState();
			const jsx = (<Tools {...props} />);
			const element = shallowWithState(jsx, state).dive();
			element.instance().onExportRequest(true, true);
			expect(exportThreads).toHaveBeenCalledTimes(1);
			expect(exportThreads).toHaveBeenLastCalledWith({
				includeHiatused: true, includeArchive: true
			});
		});
	});
});
