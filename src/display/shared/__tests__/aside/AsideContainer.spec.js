// #region imports
import React from 'react';
import { shallowWithState } from '../../../../utility/testHelpers';
import AsideContainer from '../../aside/AsideContainer';
// #endregion imports

// #region mocks
jest.mock('../../../../infrastructure/selectors', () => ({
	markUnreadNews: jest.fn()
}));
import { markUnreadNews } from '../../../../infrastructure/selectors'; //eslint-disable-line
jest.mock('../../aside/Aside', () => 'Aside');
// #endregion mocks

const createTestProps = propOverrides => ({
	...propOverrides
});

const createTestState = stateOverrides => ({
	news: [],
	...stateOverrides
});

describe('rendering', () => {
	it('should render valid snapshot', () => {
		const props = createTestProps();
		const state = createTestState();
		markUnreadNews.mockImplementationOnce(() => []);
		const jsx = (<AsideContainer {...props} />);
		const element = shallowWithState(jsx, state).dive('AsideContainer');
		expect(element).toMatchSnapshot();
	});
	it('should render valid snapshot with news', () => {
		const props = createTestProps();
		const state = createTestState();
		markUnreadNews.mockImplementationOnce(() => [
			{ PostId: '12345', PostTitle: 'Test Title' },
			{ PostId: '23456', PostTitle: 'Test Title 2' },
			{ PostId: '34567', PostTitle: 'Test Title 3' }
		]);
		const jsx = (<AsideContainer {...props} />);
		const element = shallowWithState(jsx, state).dive('AsideContainer');
		expect(element).toMatchSnapshot();
	});
	it('should pass news as prop', () => {
		const props = createTestProps();
		const state = createTestState();
		markUnreadNews.mockImplementationOnce(() => [
			{ PostId: '12345', PostTitle: 'Test Title' },
			{ PostId: '23456', PostTitle: 'Test Title 2' },
			{ PostId: '34567', PostTitle: 'Test Title 3' }
		]);
		const jsx = (<AsideContainer {...props} />);
		const element = shallowWithState(jsx, state).dive('AsideContainer');
		expect(element.props().news).toHaveLength(3);
	});
});
