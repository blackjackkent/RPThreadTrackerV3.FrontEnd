// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '../../../../../config/tests/helpers.unit';
import StaticDropdownNav from '../../static/StaticDropdownNav';
// #endregion imports

const createTestProps = propOverrides => ({
	activeTab: 'test-tab',
	setActiveTab: jest.fn(),
	options: [{ tabId: 'mock-option-1', name: 'Mock Option 1' }, { tabId: 'mock-option-2', name: 'Mock Option 2' }],
	...propOverrides
});
describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = (<StaticDropdownNav {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
	describe('initial load', () => {
		it('should display an option for every option in props', () => {
			const props = createTestProps();
			const jsx = (<StaticDropdownNav {...props} />);
			const element = shallow(jsx);
			const options = getSpecWrapper(element, 'static-dropdown-nav-option');
			expect(options).toHaveLength(2);
		});
	});
});

describe('behavior', () => {
	describe('setActiveTab', () => {
		it('should be triggered with selected value on change', () => {
			const setActiveTab = jest.fn();
			const mockEvent = { target: { value: 'test-tab-3' } };
			const props = createTestProps({ setActiveTab });
			const jsx = (<StaticDropdownNav {...props} />);
			const element = shallow(jsx);
			const field = getSpecWrapper(element, 'static-dropdown-nav-select');
			field.simulate('change', mockEvent);
			expect(setActiveTab).toHaveBeenCalledTimes(1);
			expect(setActiveTab).toHaveBeenLastCalledWith('test-tab-3');
		});
	});
});
