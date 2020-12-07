// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import ContactPane from '../ContactPane';
// #endregion imports

const createTestProps = (propOverrides) => ({
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const element = shallow(<ContactPane {...createTestProps()} />);
			expect(element).toMatchSnapshot();
		});
	});
});
