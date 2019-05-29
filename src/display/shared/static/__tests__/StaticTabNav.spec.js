// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '~/utility/helpers.unit';
import StaticTabNav from '../StaticTabNav';
// #endregion imports

jest.mock('../StaticTabNavItem', () => 'StaticTabNavItem');

const createTestProps = propOverrides => ({
	options: [
		{ href: '/test/mock-option-1', name: 'Mock Option 1' },
		{ href: '/test/mock-option-2', name: 'Mock Option 2' }
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
	describe('content', () => {
		it('should display an option for every option in props', () => {
			const props = createTestProps();
			const jsx = (<StaticTabNav {...props} />);
			const element = shallow(jsx);
			const options = getSpecWrapper(element, 'static-tab-nav-option');
			expect(options).toHaveLength(2);
		});
	});
});
