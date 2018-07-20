// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import PublicHeader from '../PublicHeader';
// #endregion imports

const createTestProps = propOverrides => ({
	isLoadingIconVisible: false,
	slug: 'my-slug',
	title: 'My Title',
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const element = shallow(<PublicHeader {...createTestProps()} />);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot when loading icon is visible', () => {
			const element =
				shallow(<PublicHeader {...createTestProps({ isLoadingIconVisible: true })} />);
			expect(element).toMatchSnapshot();
		});
	});
});
