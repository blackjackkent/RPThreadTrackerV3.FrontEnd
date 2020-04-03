import React from 'react';
import { shallow } from 'enzyme';
import * as GoogleAnalytics from 'react-ga';
import withPageViewTracker from '../withPageViewTracker';

jest.mock('react-ga', () => ({
	initialize: jest.fn(),
	set: jest.fn(),
	pageview: jest.fn()
}));

const createTestProps = (propOverrides) => ({
	location: {
		pathname: '/test'
	},
	...propOverrides
});

beforeEach(() => {
	jest.resetAllMocks();
});

describe('behavior', () => {
	describe('componentDidMount', () => {
		it('should track page by pathname', () => {
			const TrackedComponent = withPageViewTracker(() => 'WrappedComponent', {
				testOption: 'test-value'
			});
			const props = createTestProps();
			const jsx = <TrackedComponent {...props} />;
			shallow(jsx);
			expect(GoogleAnalytics.set).toHaveBeenCalledTimes(1);
			expect(GoogleAnalytics.set).toHaveBeenCalledWith({
				page: '/test',
				testOption: 'test-value'
			});
			expect(GoogleAnalytics.pageview).toHaveBeenCalledTimes(1);
			expect(GoogleAnalytics.pageview).toHaveBeenCalledWith('/test');
		});
	});
	describe('componentWillReceiveProps', () => {
		it('should track page if location has changed', () => {
			const TrackedComponent = withPageViewTracker(() => 'WrappedComponent');
			const props = createTestProps();
			const jsx = <TrackedComponent {...props} />;
			const element = shallow(jsx);
			element.setProps({
				location: {
					pathname: '/test2'
				}
			});
			expect(GoogleAnalytics.set).toHaveBeenCalledTimes(2);
			expect(GoogleAnalytics.set).toHaveBeenCalledWith({
				page: '/test2'
			});
			expect(GoogleAnalytics.pageview).toHaveBeenCalledTimes(2);
			expect(GoogleAnalytics.pageview).toHaveBeenCalledWith('/test2');
		});
		it('should do nothing if location has not changed', () => {
			const TrackedComponent = withPageViewTracker(() => 'WrappedComponent');
			const props = createTestProps();
			const jsx = <TrackedComponent {...props} />;
			const element = shallow(jsx);
			element.setProps({
				location: {
					pathname: '/test'
				}
			});
			expect(GoogleAnalytics.set).toHaveBeenCalledTimes(1);
			expect(GoogleAnalytics.pageview).toHaveBeenCalledTimes(1);
		});
	});
});
