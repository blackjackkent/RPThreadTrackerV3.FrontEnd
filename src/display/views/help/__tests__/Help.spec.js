// #region imports
import React from 'react';
import { getSpecWrapper, shallowWithState } from '../../../../../config/tests/helpers.unit';
import Help from '../Help';
// #endregion imports

// #region mocks
jest.mock('../components/AboutTrackerPane', () => 'AboutTrackerPane');
jest.mock('../components/SupportGuidesPane', () => 'SupportGuidesPane');
jest.mock('../components/ContactFormPane', () => 'ContactFormPane');
jest.mock('../components/FAQPane', () => 'FAQPane');
jest.mock('../../../../infrastructure/actions', () => ({}));
jest.mock('../../../../infrastructure/constants/tabs', () => ({
	HELP: {
		TAB1: {
			href: '/help/tab1',
			name: 'Tab 1'
		},
		TAB2: {
			href: '/help/tab2',
			name: 'Tab 2'
		}
	}
}));
jest.mock('../../../shared/static/StaticTabNav', () => 'StaticTabNav');
jest.mock('../../../shared/static/StaticDropdownNav', () => 'StaticDropdownNav');
// #endregion mocks

const createTestProps = propOverrides => ({
	setActiveHelpTab: jest.fn(),
	submitContactForm: jest.fn(),
	match: {
		url: '/help/tab1',
		params: { tabId: 'tab1' }
	},
	...propOverrides
});

const createTestState = stateOverrides => ({
	...stateOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const state = createTestState();
			const jsx = (<Help {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
	});
	describe('options', () => {
		it('should populate options from imported tabs on dropdown nav', () => {
			const props = createTestProps();
			const state = createTestState();
			const jsx = (<Help {...props} />);
			const element = shallowWithState(jsx, state).dive();
			const form = getSpecWrapper(element, 'help-static-dropdown-nav');
			const { options } = form.props();
			expect(options).toHaveLength(2);
		});
		it('should populate options from imported tabs on tab nav', () => {
			const props = createTestProps();
			const state = createTestState();
			const jsx = (<Help {...props} />);
			const element = shallowWithState(jsx, state).dive();
			const form = getSpecWrapper(element, 'help-static-tab-nav');
			const { options } = form.props();
			expect(options).toHaveLength(2);
		});
	});
});
