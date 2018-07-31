// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper, initMockDateNow } from '../../../../../config/tests/helpers.unit';
import AsideNewsRow from '../AsideNewsRow';
// #endregion imports

initMockDateNow();
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
