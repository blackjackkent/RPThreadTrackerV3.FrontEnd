// #region imports
import React from 'react';
import { getSpecWrapper, shallowWithState } from '../../../../../config/tests/helpers.unit';
import Settings from '../Settings';
// #endregion imports

// #region mocks
jest.mock('../components/ChangePasswordPane', () => 'ChangePasswordPane');
jest.mock('../components/UpdateAccountInfoPane', () => 'UpdateAccountInfoPane');
jest.mock('../../../../infrastructure/actions', () => ({}));
jest.mock('../../../../infrastructure/constants/tabs', () => ({
	SETTINGS: {
		TAB1: {
			href: '/settings/tab1',
			name: 'Tab 1'
		},
		TAB2: {
			href: '/settings/tab2',
			name: 'Tab 2'
		}
	}
}));
jest.mock('../../../shared/static/StaticTabNav', () => 'StaticTabNav');
jest.mock('../../../shared/static/StaticDropdownNav', () => 'StaticDropdownNav');
// #endregion mocks

const createTestProps = propOverrides => ({
	setActiveSettingsTab: jest.fn(),
	submitUserChangePassword: jest.fn(),
	submitUserAccountInfo: jest.fn(),
	match: {
		url: '/settings/tab1',
		params: { tabId: 'tab1' }
	},
	...propOverrides
});

const createTestState = stateOverrides => ({
	user: { id: '12345' },
	...stateOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const state = createTestState();
			const jsx = (<Settings {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
	});
	describe('options', () => {
		it('should populate options from imported tabs on dropdown nav', () => {
			const props = createTestProps();
			const state = createTestState();
			const jsx = (<Settings {...props} />);
			const element = shallowWithState(jsx, state).dive();
			const form = getSpecWrapper(element, 'settings-static-dropdown-nav');
			const { options } = form.props();
			expect(options).toHaveLength(2);
		});
		it('should populate options from imported tabs on tab nav', () => {
			const props = createTestProps();
			const state = createTestState();
			const jsx = (<Settings {...props} />);
			const element = shallowWithState(jsx, state).dive();
			const form = getSpecWrapper(element, 'settings-static-tab-nav');
			const { options } = form.props();
			expect(options).toHaveLength(2);
		});
	});
});
