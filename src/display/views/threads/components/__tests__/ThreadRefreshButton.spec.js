// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '~/utility/helpers.unit';
import ThreadRefreshButton from '../ThreadRefreshButton';
// #endregion imports

const createTestProps = propOverrides => ({
	isArchive: true,
	refreshThreads: jest.fn(),
	...propOverrides
});
describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = (<ThreadRefreshButton {...props} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
});

describe('behavior', () => {
	describe('refreshThreads', () => {
		it('should trigger refresh property function on click', () => {
			const refreshThreads = jest.fn();
			const props = createTestProps({ refreshThreads });
			const jsx = (<ThreadRefreshButton {...props} />);
			const element = shallow(jsx);
			const button = getSpecWrapper(element, 'thread-refresh-button-submit');
			button.simulate('click');
			expect(refreshThreads).toHaveBeenCalledTimes(1);
			expect(refreshThreads).toHaveBeenLastCalledWith(true);
		});
	});
});
