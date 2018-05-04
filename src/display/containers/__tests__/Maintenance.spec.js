// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import Maintenance from '../Maintenance';
// #endregion imports

describe('rendering', () => {
	it('should render valid snapshot', () => {
		const jsx = (<Maintenance />);
		const element = shallow(jsx);
		expect(element).toMatchSnapshot();
	});
});
