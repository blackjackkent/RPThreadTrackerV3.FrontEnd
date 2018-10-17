// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import Landing from '../Landing';
// #endregion imports

const createTestProps = propOverrides => ({
	currentYear: 2018,
	...propOverrides
});
describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const jsx = (<Landing {...createTestProps()} />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
});
