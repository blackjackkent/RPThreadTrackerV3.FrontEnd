// #region imports
import React from 'react';
import { shallowWithState } from '../../../../../config/tests/helpers.unit';
import * as selectors from '../../../../infrastructure/selectors'; //eslint-disable-line
import AsideContainer from '../AsideContainer';
// #endregion imports

// #region mocks
jest.mock('../../../../infrastructure/selectors', () => ({
	markUnreadNews: jest.fn()
}));
jest.mock('../Aside', () => 'Aside');
// #endregion mocks

const createTestProps = propOverrides => ({
	...propOverrides
});

const createTestState = stateOverrides => ({
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
			const jsx = (<AsideContainer {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot with news', () => {
			const props = createTestProps();
			const state = createTestState();
			selectors.markUnreadNews.mockReturnValue([
				{ PostId: '12345', PostTitle: 'Test Title' },
				{ PostId: '23456', PostTitle: 'Test Title 2' },
				{ PostId: '34567', PostTitle: 'Test Title 3' }
			]);
			const jsx = (<AsideContainer {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(element).toMatchSnapshot();
		});
	});
	describe('content', () => {
		it('should pass news as prop', () => {
			const props = createTestProps();
			const state = createTestState();
			selectors.markUnreadNews.mockReturnValue([
				{ PostId: '12345', PostTitle: 'Test Title' },
				{ PostId: '23456', PostTitle: 'Test Title 2' },
				{ PostId: '34567', PostTitle: 'Test Title 3' }
			]);
			const jsx = (<AsideContainer {...props} />);
			const element = shallowWithState(jsx, state).dive();
			expect(element.props().news).toHaveLength(3);
		});
	});
});
