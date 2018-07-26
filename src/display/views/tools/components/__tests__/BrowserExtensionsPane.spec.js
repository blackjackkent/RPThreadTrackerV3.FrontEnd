// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import BrowserExtensionsPane from '../BrowserExtensionsPane';
// #endregion imports

const createTestProps = propOverrides => ({
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const element = shallow(<BrowserExtensionsPane {...createTestProps()} />);
			expect(element).toMatchSnapshot();
		});
	});
});
