// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { initMockDateNow } from '../../../../../config/tests/helpers.unit';
import Footer from '../Footer';
// #endregion imports

initMockDateNow();
describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const jsx = (<Footer />);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
});
