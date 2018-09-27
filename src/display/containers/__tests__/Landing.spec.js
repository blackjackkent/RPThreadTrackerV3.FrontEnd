// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { initMockDateNow } from '../../../../config/tests/helpers.unit';
import Landing from '../Landing';
// #endregion imports

initMockDateNow();
describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const jsx = (<Landing />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
});
