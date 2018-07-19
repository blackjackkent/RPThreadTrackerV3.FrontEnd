// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '../../../../../config/tests/helpers.unit';
import AsideNewsRow from '../AsideNewsRow';
// #endregion imports

const DATE_TO_USE = new Date('June 5, 1989 03:24:00');
const MockDate = Date;
global.Date = jest.fn(() => DATE_TO_USE);
global.Date.UTC = MockDate.UTC;
global.Date.parse = MockDate.parse;
global.Date.now = MockDate.now;
const createTestProps = propOverrides => ({
	item: {
		PostUrl: 'testurl',
		PostTitle: 'testtitle',
		PostDate: Date.now,
		isUnread: false
	},
	...propOverrides
});
describe('rendering', () => {
	describe('snapshots', () => {
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
	});
	describe('badge', () => {
		it('should be hidden when news item is read', () => {
			const props = createTestProps();
			const jsx = (<AsideNewsRow {...props} />);
			const element = shallow(jsx);
			const badge = getSpecWrapper(element, 'news-item-badge');
			expect(badge.hasClass('float-right')).toEqual(false);
			expect(badge.hasClass('d-none')).toEqual(true);
		});
		it('should be visible when news item is unread', () => {
			const props = createTestProps();
			props.item.isUnread = true;
			const jsx = (<AsideNewsRow {...props} />);
			const element = shallow(jsx);
			const badge = getSpecWrapper(element, 'news-item-badge');
			expect(badge.hasClass('float-right')).toEqual(true);
			expect(badge.hasClass('d-none')).toEqual(false);
		});
	});
});
