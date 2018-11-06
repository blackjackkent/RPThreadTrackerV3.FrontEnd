// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import StaticTabNavItem from '../StaticTabNavItem';
// #endregion imports

const createTestProps = propOverrides => ({
	href: '/test/mock-tab',
	title: 'Mock Tab',
	...propOverrides
});
describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = (<StaticTabNavItem {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
});
