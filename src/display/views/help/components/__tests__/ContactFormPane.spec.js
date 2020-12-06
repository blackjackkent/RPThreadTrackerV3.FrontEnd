// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import ContactFormPane from '../ContactFormPane';
// #endregion imports

const createTestProps = (propOverrides) => ({
	submitContactForm: jest.fn(),
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const element = shallow(<ContactFormPane {...createTestProps()} />);
			expect(element).toMatchSnapshot();
		});
	});
});
