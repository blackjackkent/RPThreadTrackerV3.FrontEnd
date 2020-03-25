// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import FAQPane from '../FAQPane';
// #endregion imports

const createTestProps = (propOverrides) => ({
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const element = shallow(<FAQPane {...createTestProps()} />);
			expect(element).toMatchSnapshot();
		});
	});
});
