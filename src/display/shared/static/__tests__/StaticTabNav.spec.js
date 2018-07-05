// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '../../../../../config/tests/helpers.unit';
import StaticTabNav from '../StaticTabNav';
// #endregion imports

jest.mock('../StaticTabNavItem', () => 'StaticTabNavItem');

const createTestProps = propOverrides => ({
	activeTab: 'test-tab',
	setActiveTab: jest.fn(),
	options: [
		{ tabId: 'mock-option-1', name: 'Mock Option 1', icon: 'icon1' },
		{ tabId: 'mock-option-2', name: 'Mock Option 2', icon: 'icon2' }
	],
	...propOverrides
});
describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = (<StaticTabNav {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
	describe('initial load', () => {
		it('should display an option for every option in props', () => {
			const props = createTestProps();
			const jsx = (<StaticTabNav {...props} />);
			const element = shallow(jsx);
			const options = getSpecWrapper(element, 'static-tab-nav-option');
			expect(options).toHaveLength(2);
		});
	});
});
