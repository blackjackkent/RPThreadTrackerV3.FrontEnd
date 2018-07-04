// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from '../../sidebar/Sidebar';
// #endregion imports

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const jsx = (<Sidebar />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
});
