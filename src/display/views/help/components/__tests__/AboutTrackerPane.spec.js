// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import AboutTrackerPane from '../AboutTrackerPane';
// #endregion imports

const createTestProps = (propOverrides) => ({
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const element = shallow(<AboutTrackerPane {...createTestProps()} />);
			expect(element).toMatchSnapshot();
		});
	});
});
