// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import PublicContainer from '../PublicContainer';
// #endregion imports

// #region mocks
jest.mock('../../views/public/Public', () => () => 'Public');
// #endregion mocks

describe('rendering', () => {
	it('should render valid snapshot', () => {
		const jsx = (<PublicContainer />);
		const element = shallow(jsx);
		expect(element).toMatchSnapshot();
	});
});
