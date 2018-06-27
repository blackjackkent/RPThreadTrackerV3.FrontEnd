// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import HeaderButton from '../../header/components/HeaderButton';
// #endregion imports

const createTestProps = propOverrides => ({
	onClick: jest.fn(),
	label: 'Test Button',
	...propOverrides
});

describe('rendering', () => {
	it('should render valid snapshot', () => {
		const props = createTestProps();
		const jsx = (<HeaderButton {...props} />);
		const element = shallow(jsx);
		expect(element).toMatchSnapshot();
	});
});

describe('behavior', () => {
	it('should send toggled aside state to handler on click', () => {
		const onClick = jest.fn();
		const props = createTestProps({ onClick });
		const jsx = (<HeaderButton {...props} />);
		const element = shallow(jsx);
		const link = element.find('Button');
		link.simulate('click');
		expect(onClick).toHaveBeenCalledTimes(1);
	});
});
