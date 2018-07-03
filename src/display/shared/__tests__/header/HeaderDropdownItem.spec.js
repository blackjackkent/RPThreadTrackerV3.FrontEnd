// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import HeaderDropdownItem from '../../header/components/HeaderDropdownItem';
// #endregion imports

const createTestProps = propOverrides => ({
	onClick: jest.fn(),
	label: 'Test Item',
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = (<HeaderDropdownItem {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
});

describe('behavior', () => {
	describe('onClick', () => {
		it('should be triggered on click', () => {
			const onClick = jest.fn();
			const props = createTestProps({ onClick });
			const jsx = (<HeaderDropdownItem {...props} />);
			const element = shallow(jsx);
			const link = element.find('span');
			link.simulate('click');
			expect(onClick).toHaveBeenCalledTimes(1);
		});
		it('should be triggered on keydown', () => {
			const onClick = jest.fn();
			const props = createTestProps({ onClick });
			const jsx = (<HeaderDropdownItem {...props} />);
			const element = shallow(jsx);
			const link = element.find('span');
			link.simulate('keydown');
			expect(onClick).toHaveBeenCalledTimes(1);
		});
	});
});
