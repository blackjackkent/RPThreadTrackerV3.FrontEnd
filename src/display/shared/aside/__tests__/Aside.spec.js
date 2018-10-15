// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import Aside from '../Aside';
// #endregion imports

jest.mock('../_styles', () => 'Style');
jest.mock('../AsideNewsRow', () => 'AsideNewsRow');

const createTestProps = propOverrides => ({
	news: [],
	...propOverrides
});
describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = (<Aside {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot with items', () => {
			const props = createTestProps({
				news: [
					{ postId: '12345', postTitle: 'Test Title' },
					{ postId: '23456', postTitle: 'Test Title 2' },
					{ postId: '34567', postTitle: 'Test Title 3' }
				]
			});
			const jsx = (<Aside {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
	describe('content', () => {
		it('should display blank when no news', () => {
			const props = createTestProps({
				news: []
			});
			const jsx = (<Aside {...props} />);
			const element = shallow(jsx);
			const items = element.find('AsideNewsRow');
			expect(items).toHaveLength(0);
		});
		it('should display news', () => {
			const props = createTestProps({
				news: [
					{ postId: '12345', postTitle: 'Test Title' },
					{ postId: '23456', postTitle: 'Test Title 2' },
					{ postId: '34567', postTitle: 'Test Title 3' }
				]
			});
			const jsx = (<Aside {...props} />);
			const element = shallow(jsx);
			const items = element.find('AsideNewsRow');
			expect(items).toHaveLength(3);
		});
	});
});
