// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '~/testhelpers/helpers.unit';
import * as history from '../../../../utility/history';
import StaticDropdownNav from '../StaticDropdownNav';
// #endregion imports

jest.mock('../../../../utility/history', () => ({
	navigation: {
		navigateTo: jest.fn()
	}
}));

const createTestProps = (propOverrides) => ({
	activeTab: '/test/mock-option-2',
	options: [
		{
			href: '/test/mock-option-1',
			name: 'Mock Option 1'
		},
		{
			href: '/test/mock-option-2',
			name: 'Mock Option 2'
		}
	],
	...propOverrides
});
describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = <StaticDropdownNav {...props} />;
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
	describe('content', () => {
		it('should display an option for every option in props', () => {
			const props = createTestProps();
			const jsx = <StaticDropdownNav {...props} />;
			const element = shallow(jsx);
			const options = getSpecWrapper(element, 'static-dropdown-nav-option');
			expect(options).toHaveLength(2);
		});
	});
});

describe('behavior', () => {
	describe('setActiveTab', () => {
		it('should trigger navigation with selected value on change', () => {
			const mockEvent = {
				target: {
					value: '/test/mock-option-1'
				}
			};
			const props = createTestProps();
			const jsx = <StaticDropdownNav {...props} />;
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'static-dropdown-nav-select');
			field.simulate('change', mockEvent);
			expect(history.navigation.navigateTo).toHaveBeenCalledTimes(1);
			expect(history.navigation.navigateTo).toHaveBeenLastCalledWith('/test/mock-option-1');
		});
	});
});
