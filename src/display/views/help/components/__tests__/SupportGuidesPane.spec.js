// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import SupportGuidesPane from '../SupportGuidesPane';
// #endregion imports

const createTestProps = propOverrides => ({
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const element = shallow(<SupportGuidesPane {...createTestProps()} />);
			expect(element).toMatchSnapshot();
		});
	});
});
