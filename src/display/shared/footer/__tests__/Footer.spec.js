// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { initMockDateNow, getSpecWrapper } from '~/testhelpers/helpers.unit';
import Footer from '../Footer';
// #endregion imports

initMockDateNow();
const createTestProps = (propOverrides) => ({
	useLightTheme: false,
	toggleTheme: jest.fn(),
	...propOverrides
});

describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const jsx = <Footer {...createTestProps()} />;
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot when light theme', () => {
			const jsx = (
				<Footer
					{...createTestProps({
						useLightTheme: true
					})}
				/>
			);
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
});
describe('behavior', () => {
	describe('theme toggle', () => {
		it('should trigger theme toggle on button click', () => {
			const toggleTheme = jest.fn();
			const props = createTestProps({
				toggleTheme
			});
			const element = shallow(<Footer {...props} />);
			const button = getSpecWrapper(element, 'footer-theme-toggle-button');
			button.simulate('click');
			expect(toggleTheme).toHaveBeenCalledTimes(1);
		});
	});
});
