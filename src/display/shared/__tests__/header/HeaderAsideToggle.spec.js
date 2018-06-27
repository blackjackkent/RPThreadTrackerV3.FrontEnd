// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '../../../../../config/tests/helpers.unit';
import HeaderAsideToggle from '../../header/components/HeaderAsideToggle';
// #endregion imports

const createTestProps = propOverrides => ({
	asideToggle: jest.fn(),
	newsUnreadCount: 0,
	isNewsAsideOpen: true,
	...propOverrides
});

describe('rendering', () => {
	it('should render valid snapshot with no new items', () => {
		const props = createTestProps();
		const jsx = (<HeaderAsideToggle {...props} />);
		const element = shallow(jsx);
		expect(element).toMatchSnapshot();
	});
	it('should render valid snapshot with new items', () => {
		const props = createTestProps({ newsUnreadCount: 3 });
		const jsx = (<HeaderAsideToggle {...props} />);
		const element = shallow(jsx);
		expect(element).toMatchSnapshot();
	});
	it('should not render badge when no new items', () => {
		const props = createTestProps();
		const jsx = (<HeaderAsideToggle {...props} />);
		const element = shallow(jsx);
		expect(getSpecWrapper(element, 'header-aside-toggle-unread-badge')).toHaveLength(0);
	});
	it('should render badge when new items', () => {
		const props = createTestProps({ newsUnreadCount: 3 });
		const jsx = (<HeaderAsideToggle {...props} />);
		const element = shallow(jsx);
		const badge = getSpecWrapper(element, 'header-aside-toggle-unread-badge').children().text();
		expect(badge).toBe('3');
	});
});

describe('behavior', () => {
	it('should send toggled aside state to handler on click', () => {
		const asideToggle = jest.fn();
		const props = createTestProps({ asideToggle });
		const jsx = (<HeaderAsideToggle {...props} />);
		const element = shallow(jsx);
		const link = getSpecWrapper(element, 'header-aside-toggle-link');
		link.simulate('click');
		expect(asideToggle).toHaveBeenCalledTimes(1);
		expect(asideToggle).toHaveBeenCalledWith(false);
	});
});
