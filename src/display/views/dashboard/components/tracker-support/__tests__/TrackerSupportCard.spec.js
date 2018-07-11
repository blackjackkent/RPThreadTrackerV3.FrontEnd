// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import TrackerSupportCard from '../TrackerSupportCard';
// #endregion imports

const createTestProps = propOverrides => ({
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const element = shallow(<TrackerSupportCard {...createTestProps()} />);
			expect(element).toMatchSnapshot();
		});
	});
});
