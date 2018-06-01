// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '../../../../../config/tests/helpers.unit';
import AsideNewsRow from '../../aside/AsideNewsRow';
// #endregion imports

const createTestProps = propOverrides => ({
	item: {
		PostUrl: 'testurl',
		PostTitle: 'testtitle',
		PostDate: '2018-03-14T01:19:58Z',
		isUnread: false
	},
	...propOverrides
});
describe('rendering', () => {
	it('should render valid snapshot', () => {
		const props = createTestProps();
		const jsx = (<AsideNewsRow {...props} />);
		const element = shallow(jsx);
		expect(element).toMatchSnapshot();
	});
	it('should render valid snapshot when unread', () => {
		const props = createTestProps();
		props.item.isUnread = true;
		const jsx = (<AsideNewsRow {...props} />);
		const element = shallow(jsx);
		expect(element).toMatchSnapshot();
	});
	it('should hide badge when not unread', () => {
		const props = createTestProps();
		const jsx = (<AsideNewsRow {...props} />);
		const element = shallow(jsx);
		const badge = getSpecWrapper(element, 'news-item-badge');
		expect(badge.hasClass('float-right')).toEqual(false);
		expect(badge.hasClass('d-none')).toEqual(true);
	});
	it('should show badge when unread', () => {
		const props = createTestProps();
		props.item.isUnread = true;
		const jsx = (<AsideNewsRow {...props} />);
		const element = shallow(jsx);
		const badge = getSpecWrapper(element, 'news-item-badge');
		expect(badge.hasClass('float-right')).toEqual(true);
		expect(badge.hasClass('d-none')).toEqual(false);
	});
});
