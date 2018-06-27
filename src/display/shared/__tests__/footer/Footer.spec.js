// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../footer/Footer';
// #endregion imports

const DATE_TO_USE = new Date('June 5, 1989 03:24:00');
const MockDate = Date;
global.Date = jest.fn(() => DATE_TO_USE);
global.Date.UTC = MockDate.UTC;
global.Date.parse = MockDate.parse;
global.Date.now = MockDate.now;

describe('rendering', () => {
	it('should render valid snapshot', () => {
		const jsx = (<Footer />);
		const element = shallow(jsx);
		expect(element).toMatchSnapshot();
	});
});
