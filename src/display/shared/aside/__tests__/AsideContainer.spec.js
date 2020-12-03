// #region imports
import React from 'react';
import { shallowWithState } from '~/testhelpers/helpers.unit';
import * as selectors from '../../../../infrastructure/selectors'; //eslint-disable-line
import AsideContainer from '../AsideContainer';
// #endregion imports

// #region mocks
jest.mock('../../../../infrastructure/selectors', () => ({
	markUnreadNews: jest.fn()
}));
jest.mock('../Aside', () => 'Aside');
// #endregion mocks

const createTestProps = (propOverrides) => ({
	...propOverrides
});

const createTestState = (stateOverrides) => ({
	news: [],
	...stateOverrides
});

beforeEach(() => {
	jest.resetAllMocks();
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const state = createTestState();
			selectors.markUnreadNews.mockReturnValue([]);
			const jsx = <AsideContainer {...props} />;
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot with news', () => {
			const props = createTestProps();
			const state = createTestState();
			selectors.markUnreadNews.mockReturnValue([
				{
					postId: '12345',
					postTitle: 'Test Title'
				},
				{
					postId: '23456',
					postTitle: 'Test Title 2'
				},
				{
					postId: '34567',
					postTitle: 'Test Title 3'
				}
			]);
			const jsx = <AsideContainer {...props} />;
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
	});
	describe('content', () => {
		it('should pass news as prop', () => {
			const props = createTestProps();
			const state = createTestState();
			selectors.markUnreadNews.mockReturnValue([
				{
					postId: '12345',
					postTitle: 'Test Title'
				},
				{
					postId: '23456',
					postTitle: 'Test Title 2'
				},
				{
					postId: '34567',
					postTitle: 'Test Title 3'
				}
			]);
			const jsx = <AsideContainer {...props} />;
			const element = shallowWithState(jsx, state).dive();
			expect(element.props().news).toHaveLength(3);
		});
	});
});
